// import { NextFunction, Response } from "express";
// import { Request } from "express-jwt";
// import authCompanyRegister from "../../utils/db/user/AuthCompanyRegisterPrisma";
// import authViewer from "../../view/authViewer";

// export default async function loginUser(
//     req: Request,
//     res: Response,
//     next: NextFunction
// ) {
//     const { password, email } = req.body;

//     try {
//         const user = await authCompanyRegister(password, email);
//         const authView = authViewer(user);
//         return res.status(201).json(authView);
//     } catch (error) {
//         //return next(error);
//         return res.status(500).json({ message: "Error al crear usuario" });
//     }
// }