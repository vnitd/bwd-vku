import { Router } from "express";
import {} from "../controllers/users.controller.js";
import { postToAI } from "../controllers/gemini.controller.js";

const geminiRoute: Router = Router();

geminiRoute.post("", postToAI);

export default geminiRoute;
