import { NextFunction, Response } from "express";
import { Request } from "express-jwt";
import userCompanyRegister from "../../utils/db/userCompany/userCompanyRegister";
import userViewer from "../../view/userViewer";
import bcrypt from "bcrypt";

export default async function userRegister(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const { username, password, email } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await userCompanyRegister(username, hashedPassword, email);
        const userView = userViewer(user);
        return res.status(201).json(userView); 
    } catch (error) {
        //return next(error);
        return res.status(500).json({ message: "Error al crear usuario" });
    }
}