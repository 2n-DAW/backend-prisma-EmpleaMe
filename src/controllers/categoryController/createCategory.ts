import { NextFunction, Response } from "express";
import { Request } from "express-jwt";
import categoryCreatePrisma from "../../utils/db/category/categoryCreatePrisma";
import categoryViewer from "../../view/categoryViewer";
import profileViewer from "../../view/profileViewer";

/**
 * Profile controller that adds the username in the parameters to the current user followers list.
 * The parameters of the request must contain the username that will be followed by the authenticated user.
 * @param req Request with authenticated user in the auth property.
 * @param res Response
 * @param next NextFunction
 * @returns void
 */
export default async function createCategory(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { idCat, categoryName, image } = req.body;

  try {
    // Add category to database
    const category = await categoryCreatePrisma(idCat, categoryName, image);

    // Create comment view
    const categoryView = categoryViewer(category);
    return res.status(201).json({ categoryView });
  } catch (error) {
    return next(error);
  }
}