import { NextFunction, Response } from "express";
import { Request } from "express-jwt";
import userCompanySearch from "../../utils/db/userCompany/userCompanySearch";
import userViewer from "../../view/userViewer";
import bcrypt from "bcrypt";
import userCompanyUpdate from "../../utils/db/userCompany/userCompanyUpdate";

interface CustomRequest extends Request {
    userId: string;
    userEmail: string;
    userHashedPwd: string;
}

export default async function userUpdate(
    req: CustomRequest,
    res: Response,
    next: NextFunction
) {
    const { user } = req.body;

    try {
        if (!user) return res.status(400).json({ message: "Faltan datos" });
        const user_db = await userCompanySearch(req.userEmail);

        const new_user = {
            ...user_db,
            ...user
        }

        const userUpdated = await userCompanyUpdate(new_user);
        const userView = userViewer(userUpdated);

        return res.status(201).json(userView);

    } catch (error) {
        //return next(error);
        return res.status(500).json({ message: "Error al crear usuario" });
    }
}