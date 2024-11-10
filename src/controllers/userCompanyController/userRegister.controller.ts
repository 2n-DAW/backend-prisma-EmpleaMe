import { NextFunction, Response } from "express";
import { Request } from "express-jwt";
import userCompanyRegister from "../../utils/db/userCompany/userCompanyRegister.service";
import userViewer from "../../view/userViewer.view";
import bcrypt from "bcrypt";

export default async function userRegister(req: Request,res: Response,next: NextFunction): Promise<Response | void> {
    const { username, password, email, userId } = req.body.user;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await userCompanyRegister(username, hashedPassword, email, userId);
        const userView = userViewer(user);
        return res.status(201).json(userView); 
    } catch (error) {
        console.error("Error en userRegister: ", error);
        return res.status(500).json({ message: "Error al crear usuario" });
    }
}