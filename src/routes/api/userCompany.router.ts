import { Router } from "express";
import { userRegister, userLogin, userUpdate, getCurrentUser } from "../../controllers/userCompanyController";
import { verifyJWT } from "../../middlewares";
const router = Router();

router.post("/user/login", userLogin);

router.post("/user", userRegister);

router.get("/user", verifyJWT, getCurrentUser);

router.put("/user", verifyJWT, userUpdate);

export default router;
