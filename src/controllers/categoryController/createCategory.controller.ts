import { NextFunction, Response } from "express";
import { Request } from "express-jwt";
import createCategoryPrisma from "../../utils/db/category/createCategoryPrisma.service";
import categoryViewer from "../../view/categoryViewer.view";

export default async function createCategory(req: Request, res: Response, next: NextFunction) {
  try {
    const { id_cat, category_name, image } = req.body;
    // Add category to database
    const category = await createCategoryPrisma(id_cat, category_name, image);

    // Create comment view
    const categoryView = categoryViewer(category);
    return res.status(201).json({ categoryView });
  } catch (error) {
    return next(error);
  }
}