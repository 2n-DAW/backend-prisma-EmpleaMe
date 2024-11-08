import { NextFunction, Response } from "express";
import { Request } from "express-jwt";
import inscriptionSearch from "../../utils/db/inscription/inscriptionSearch.service";
import inscriptionViewer from "../../view/inscriptionViewer.view";
import inscriptionUpdate from "../../utils/db/inscription/inscriptionUpdate.service";

export default async function updateInscription(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const { inscription } = req.body;

    try {
        if (!inscription) return res.status(400).json({ message: "Faltan datos" });
        const { job, user_email } = inscription;
        const inscription_db = await inscriptionSearch({ job, user_email });

        const new_inscription = {
            ...inscription_db,
            ...inscription
        }

        const inscriptionUpdated = await inscriptionUpdate({ job, user_email }, new_inscription);
        console.log("Inscripción actualizada: ", inscriptionUpdated);
        const inscriptionView = inscriptionViewer(inscriptionUpdated);

        return res.status(201).json(inscriptionView);

    } catch (error) {
        console.error("Error en updateInscription: ", error);
        return res.status(500).json({ message: "Error al modificar inscripción" });
    }
}