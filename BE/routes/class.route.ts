import { Router } from "express";
import {} from "../controllers/users.controller.js";
import { create } from "../controllers/class.controller.js";

const classRoute: Router = Router();

classRoute.post("", create);

export default classRoute;
