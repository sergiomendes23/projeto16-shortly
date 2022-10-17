import validateToken from "../Middlewares/validateToken.js";

import { Router } from "express";

import { usersMe } from "../Controllers/usersMeController.js";

const router = Router();

router.get("/users/me", validateToken, usersMe);

export default router;