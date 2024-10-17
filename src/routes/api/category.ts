import { Router } from "express";
import * as category from "../../controllers/categoryController";


const router = Router();

router.post('/categories', category.createCategory);

// router.get('/categories', category.findAllCategories);

// router.get('/categories/:slug', category.findOneCategory);

// router.put('/categories/:slug', category.updateCategory);

// router.delete('/categories/:slug', category.deleteOneCategory);

export default router;
