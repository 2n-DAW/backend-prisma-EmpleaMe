import { NextFunction, Response } from "express";
import { Request } from "express-jwt";
import authCompanyRegister from "../../utils/db/user/AuthCompanyRegisterPrisma";
import authViewer from "../../view/authViewer";
import bcrypt from "bcrypt";

export default async function userRegister(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const { username, password, email } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await authCompanyRegister(username, hashedPassword, email);
        const authView = authViewer(user);
        return res.status(201).json(authView);
    } catch (error) {
        //return next(error);
        return res.status(500).json({ message: "Error al crear usuario" });
    }
}