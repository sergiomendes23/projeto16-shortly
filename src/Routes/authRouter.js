import {signUp} from "../Controllers/authController.js";
import { Router } from "express";

const router = Router();

router.post('/signup', signUp);

export default router;