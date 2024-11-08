import { NextFunction, Response } from "express";
import create from "../../utils/db/job/createJob.service";
import jobViewer from "../../view/jobViewer.view";
import { CustomRequest } from "../../utils/interfaces/customRequest.interface";

export default async function createJob(req: CustomRequest,res: Response,next: NextFunction): Promise<Response | void> {
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