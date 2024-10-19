import { Router } from "express";
import * as category from "../../controllers/categoryController";


const router = Router();

router.post('/categories', category.createCategory);

router.get('/categories', category.findAllCategories);

export default router;