import { NextFunction, Response } from "express";
import { Request } from "express-jwt";
import findAllJobsDb from "../../utils/db/job/findAllJobs.service";
import jobViewer from "../../view/jobViewer.view";
import countJobs from "../../utils/db/job/countJobs.service";

export default async function findAllJobs(
    req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        const query = req.query;
        const jobs_db = await findAllJobsDb(query);
        const jobs = jobs_db.map(jobViewer);
        const job_count = await countJobs(query);

        return res.status(201).json({ jobs, job_count });

    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
}