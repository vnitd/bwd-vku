import { Router } from "express";
import { register } from "../controllers/users.controller";

const userRoute: Router = Router();

userRoute.post("/register", register);

export default userRoute;
