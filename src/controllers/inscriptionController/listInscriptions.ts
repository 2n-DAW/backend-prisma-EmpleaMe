import { NextFunction, Response } from "express";
import { Request } from "express-jwt";
import findAllJobsDb from "../../utils/db/job/findAllJobs";
import inscriptionsList from "../../utils/db/inscription/inscriptionList";

interface CustomRequest extends Request {
    userId?: string;
    userEmail?: string;
    userHashedPwd?: string;
}

export default async function updateInscription(
    req: CustomRequest,
    res: Response,
    next: NextFunction
) {

    try {
        const query = { author: req.userId, limit: 9999999, offset: 0 };
        console.log(req.userId);
        if (!req.userId) return res.status(400).json({ message: "Token incorrecto" });
        const jobs_db = await findAllJobsDb(query);
        console.log("jobs_db: ", jobs_db);
        const listInscriptions = await inscriptionsList(jobs_db);
        console.log("listInscriptions: ", listInscriptions);
        return res.status(201).json(listInscriptions);

    } catch (error) {
        console.error("Error en listInscription: ", error);
        return res.status(500).json({ message: "Error al listar" });
    }
}