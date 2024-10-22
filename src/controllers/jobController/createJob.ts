import { NextFunction, Response } from "express";
import { Request } from "express-jwt";
import create from "../../utils/db/job/createJob";
import jobViewer from "../../view/jobViewer";

export default async function createJob(
    req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        const { author, name, description, salary, images, img, id_cat, id_contract, id_workingDay, id_province } = req.body.job;
        const newJob = await create(author, name, description, salary, images, img, id_cat, id_contract, id_workingDay, id_province);
        const resp = jobViewer(newJob);
        return res.status(201).json({ job: resp });
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
}