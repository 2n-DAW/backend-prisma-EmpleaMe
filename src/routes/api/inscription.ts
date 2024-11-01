import { Router } from "express";
import { updateInscription } from "../../controllers/inscriptionController";


const router = Router();

router.put('/inscription', updateInscription);

export default router;