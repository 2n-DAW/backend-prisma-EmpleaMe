import { Router } from "express";
import { userRegister } from "../../controllers/authCompanyController";
//import { userLoginValidator, userRegisterValidator } from "../../middleware/userValidator";

const router = Router();

// router.post("/user/login", userLoginValidator, userLogin);

router.post("/user", userRegister);

// router.get("/user", verifyJWT, getCurrentUser);

// router.put("/user", verifyJWT, userUpdate);

export default router;
