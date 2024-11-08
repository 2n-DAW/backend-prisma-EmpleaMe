import { NextFunction, Response } from "express";
import { Request } from "express-jwt";
import updateJobDb from "../../utils/db/job/updateJob.service";
import jobViewer from "../../view/jobViewer.view";
import findOneJob from "../../utils/db/job/findOneJob.service";
import userCompanySearch from "../../utils/db/userCompany/userCompanySearch.service";

interface CustomRequest extends Request {
    userId?: string;
    userEmail?: string;
    userHashedPwd?: string;
}

export default async function updateJob(
    req: CustomRequest,
    res: Response,
    next: NextFunction
) {
    const serarch_params = req.params;
    const new_job_data = req.body;
    try {
        if (!req.userEmail || !req.userHashedPwd || !req.userId) return res.status(400).json({ message: "Error en el token" });
        const job = await findOneJob(serarch_params);
        console.log(job?.author);
        const user = await userCompanySearch(req.userEmail);
        if (!user) return res.status(404).json({ message: "User not found" });
        if (user.id !== job?.author) return res.status(403).json({ message: "No autorizado" });
        const job_updated = await updateJobDb(serarch_params, new_job_data);
        if (!job_updated) return res.status(404).json({ message: "Job not found" });
        const resp = jobViewer(job_updated);
        return res.status(201).json({ job: resp });
    } catch (error) {
        //return next(error);
        return res.status(500).json({ message: "Error al crear usuario" });
    }
}