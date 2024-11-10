import { NextFunction, Response } from "express";
import { Request } from "express-jwt";
import userCompanySearch from "../../utils/db/userCompany/userCompanySearch.service";
import userViewer from "../../view/userViewer.view";
import { CustomRequest } from "../../utils/interfaces/customRequest.interface";

export default async function userUpdate(req: CustomRequest, res: Response, next: NextFunction): Promise<Response | void> {
    try {
        if (!req.userEmail || !req.userHashedPwd || !req.userId) return res.status(400).json({ message: "Error en el token" });

        const user_db = await userCompanySearch(req.userEmail);
        if (!user_db) return res.status(400).json({ message: "Usuario no encontrado" });
        const userView = userViewer(user_db);
        return res.status(201).json(userView);


    } catch (error) {
        console.error("Error en userUpdate: ", error);
        return res.status(500).json({ message: "Error al crear usuario" });
    }
}