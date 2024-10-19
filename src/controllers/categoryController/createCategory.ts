import { NextFunction, Response } from "express";
import { Request } from "express-jwt";
import createCategoryPrisma from "../../utils/db/category/createCategoryPrisma";
import categoryViewer from "../../view/categoryViewer";

export default async function createCategory(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id_cat, category_name, image } = req.body;
  
  try {
    // Add category to database
    const category = await createCategoryPrisma(id_cat, category_name, image);

    // Create comment view
    const categoryView = categoryViewer(category);
    return res.status(201).json({ categoryView });
  } catch (error) {
    return next(error);
  }
}