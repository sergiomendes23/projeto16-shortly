import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import authRouter from "../src/Routes/authRouter.js";
import urlsRouter from "../src/Routes/urlsRouter.js";
import usersMeRouter from "../src/Routes/usersMeRouter.js";
import rankingRourter from "../src/Routes/rankingRouter.js";

const server = express();
server.use(cors());
server.use(express.json());
dotenv.config();

server.use(authRouter);
server.use(urlsRouter);
server.use(usersMeRouter);
server.use(rankingRourter);

const PORT = process.env.PORT;
server.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));