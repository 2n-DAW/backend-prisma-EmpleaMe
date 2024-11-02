import { Router } from "express";
import { updateInscription, listInscriptions } from "../../controllers/inscriptionController";
import { verifyJWT } from "../../middlewares";


const router = Router();

router.put('/inscription', updateInscription);

router.get('/inscription', verifyJWT, listInscriptions);

export default router;