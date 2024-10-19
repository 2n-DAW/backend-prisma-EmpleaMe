import { NextFunction, Response } from "express";
import { Request } from "express-jwt";
import findAllCategoriesPrisma from "../../utils/db/category/findAllCategoriesPrisma";
import categoryViewer from "../../view/categoryViewer";

export default async function getComments(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const  query = req.query;

  try {
    // Get categories from database
    const categories = await findAllCategoriesPrisma(query);

    // Create categories view
    const categoriesView = categories.map((category: any) =>
      categoryViewer(category)
    );
    return res.json({ categories: categoriesView });
    
  } catch (error) {
    return next(error);
  }
}