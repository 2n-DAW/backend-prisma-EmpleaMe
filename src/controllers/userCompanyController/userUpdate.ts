import { NextFunction, Response } from "express";
import { Request } from "express-jwt";
import userCompanyRegister from "../../utils/db/userCompany/userCompanyRegister";
import userViewer from "../../view/userViewer";
import bcrypt from "bcrypt";

interface CustomRequest extends Request {
    userId?: string;
    userEmail?: string;
    userHashedPwd?: string;
}

export default async function userUpdate(
    req: CustomRequest,
    res: Response,
    next: NextFunction
) {
    const { user } = req.body;

    try {

        console.log("userUpdate", req.userEmail);



        if (!req.userEmail) return res.status(400).json({ message: "Faltan datos" });
        if (!user) return res.status(400).json({ message: "Faltan datos" });
        const emai = req.userEmail;
        // const updatedUser = await userCompanyUpdate(email, user);

    } catch (error) {
        //return next(error);
        return res.status(500).json({ message: "Error al crear usuario" });
    }
}