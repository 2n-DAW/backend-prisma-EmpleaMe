import { NextFunction, Response } from "express";
import { Request } from "express-jwt";
import userCompanySearch from "../../utils/db/userCompany/userCompanySearch.service";
import userViewer from "../../view/userViewer.view";
import userCompanyUpdate from "../../utils/db/userCompany/userCompanyUpdate.service";
import { CustomRequest } from "../../utils/interfaces/customRequest.interface";

export default async function userUpdate(req: CustomRequest, res: Response,next: NextFunction): Promise<Response | void> {
    try {
        const { user } = req.body;
        if (!req.userEmail || !req.userHashedPwd || !req.userId) return res.status(400).json({ message: "Error en el token" });

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
        console.error("Error en userUpdate: ", error);
        return res.status(500).json({ message: "Error al crear usuario" });
    }
}