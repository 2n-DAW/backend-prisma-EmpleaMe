import { Router } from "express";
import { createCategory, findAllCategories } from "../../controllers/categoryController";


const router = Router();

router.post('/categories', createCategory);

router.get('/categories', findAllCategories);

export default router;