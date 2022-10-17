import { Router } from "express";

import { validateSignUp, validateSignIn } from "../Middlewares/authMiddleware.js";
import {signUp, signIn} from "../Controllers/authController.js";

const router = Router();

router.post("/signup", validateSignUp, signUp);
router.post("/signin", validateSignIn, signIn);

export default router;