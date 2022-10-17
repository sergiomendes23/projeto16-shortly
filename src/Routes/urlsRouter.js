import validateToken from "../Middlewares/validateToken.js";
import validateUrls from "../Middlewares/validateUrls.js";

import { Router } from "express";

import {shortenUrl, getUrl, shortUrl, deleteUrl} from "../Controllers/urlController.js";

const router = Router();

router.post("/urls/shorten", validateToken, validateUrls, shortenUrl);
router.get("/urls/:id", getUrl);
router.get("/urls/open/:shortUrl", shortUrl);
router.delete("/urls/:id", validateToken, deleteUrl);

export default router;