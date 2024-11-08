import { NextFunction, Response } from "express";
import { Request } from "express-jwt";
import { userLoginViewer } from "../../view/userViewer.view";
import bcrypt from "bcrypt";
import jwt = require("jsonwebtoken");
import userCompanySearch from "../../utils/db/userCompany/userCompanySearch.service";

export default async function userLogin(req: Request,res: Response,next: NextFunction): Promise<Response | void> {
    const { password, email } = req.body.user;

    try {
        const user = await userCompanySearch(email);
        if (!user) return res.status(401).json({ message: "Invalid username" });
        const match = await bcrypt.compare(password, user.password);

        if (!match) return res.status(401).json({ message: "Invalid username or password" });

        if (process.env.JWT_SECRET !== undefined) {
            const token = jwt.sign({
                user: {
                    id: user.userId,
                    username: user.username,
                    email: user.email,
                    password: user.password
                }

            },
                process.env.JWT_SECRET,
                { expiresIn: process.env.ACCESS_TOKEN_EXPIRATION }
            );
            const authView = userLoginViewer(user, token);
            return res.status(201).json(authView);
        } else {
            throw new Error("JWT_SECRET not defined");
        }
    } catch (error) {
        console.log("Error en userLogin: ", error);
        return res.status(500).json({ message: error });
    }
}