import { NextFunction, Response } from "express";
import { Request } from "express-jwt";
import create from "../../utils/db/job/createJob.service";
import jobViewer from "../../view/jobViewer.view";

interface CustomRequest extends Request {
    userId?: string;
    userEmail?: string;
    userHashedPwd?: string;
}

export default async function createJob(
    req: CustomRequest,
    res: Response,
    next: NextFunction
) {
    try {
        if (!req.userId || !req.body.job) return res.status(400).json({ message: "Faltan datos" });
        const author = req.userId;
        const { name, description, salary, images, img, id_cat, id_contract, id_workingDay, id_province } = req.body.job;
        const newJob = await create(author, name, description, salary, images, img, id_cat, id_contract, id_workingDay, id_province);
        const resp = jobViewer(newJob);
        return res.status(201).json({ job: resp });
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
}