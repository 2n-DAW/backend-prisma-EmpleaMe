import { NextFunction, Response } from "express";
import { Request } from "express-jwt";
import findOneJobDb from "../../utils/db/job/findOneJob.service";
import jobViewer from "../../view/jobViewer.view";

export default async function findOneJob(
    req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        console.log(req.params);
        const job = await findOneJobDb(req.params);
        if (!job) return res.status(404).json({ message: "Job not found" });
        const resp = jobViewer(job);
        return res.status(201).json({ job: resp });

    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
}