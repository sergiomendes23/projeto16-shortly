import validateToken from "../Middlewares/validateToken.js";
import validateUrls from "../Middlewares/validateUrls.js";

import { Router } from "express";

import {shortenUrl, getUrl} from "../Controllers/urlController.js";

const router = Router();

router.post('/urls/shorten', validateToken, validateUrls, shortenUrl);
router.get("/urls/:id", validateUrls, getUrl);

export default router;