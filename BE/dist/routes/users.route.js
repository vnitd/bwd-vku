import { Router } from "express";
import { register } from "../controllers/users.controller.js";
const userRoute = Router();
userRoute.post("/register", register);
export default userRoute;
