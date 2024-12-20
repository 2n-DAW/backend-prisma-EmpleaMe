import { NextFunction, Response } from "express";
import { Request } from "express-jwt";
import findAllJobsDb from "../../utils/db/job/findAllJobs.service";
import inscriptionsList from "../../utils/db/inscription/inscriptionList.service";

interface CustomRequest extends Request {
    userId?: string;
    userEmail?: string;
    userHashedPwd?: string;
}

export default async function updateInscription(req: CustomRequest,res: Response, next: NextFunction): Promise<Response | void> {

    try {
        const query = { author: req.userId, limit: 9999999, offset: 0 };
        if (!req.userId) return res.status(400).json({ message: "Token incorrecto" });
        const jobs_db = await findAllJobsDb(query);
        const listInscriptions = await inscriptionsList(jobs_db);
        return res.status(201).json(listInscriptions);

    } catch (error) {
        console.error("Error en listInscription: ", error);
        return res.status(500).json({ message: "Error al listar" });
    }
}