import { Router } from "express";

import { ranking } from "../Controllers/rankingController.js"

const router = Router();

router.get("/ranking", ranking);

export default router;