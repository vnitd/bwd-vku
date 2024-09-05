import { Router } from "express";
import { login, register } from "../controllers/users.controller.js";

const userRoute: Router = Router();

userRoute.post("/register", register);
userRoute.get("/login", login);

export default userRoute;
