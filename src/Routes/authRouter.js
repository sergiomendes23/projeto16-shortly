import validateSignUp from "../Middlewares/validateSignUp.js";
import validateSignIn from "../Middlewares/validateSignIn.js";

import { Router } from "express";

import {signUp, signIn} from "../Controllers/authController.js";

const router = Router();

router.post("/signup", validateSignUp, signUp);
router.post("/signin", validateSignIn, signIn);

export default router;