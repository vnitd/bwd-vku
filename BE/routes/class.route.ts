import { Router } from "express";
import {} from "../controllers/users.controller.js";
import { create, deleteClasses, getClasses, updateClasses } from "../controllers/class.controller.js";

const classRoute: Router = Router();

classRoute.post("", create);

classRoute.get("/:id", getClasses); // Truy vấn thông tin dựa trên id
classRoute.put("/:id", updateClasses); // Cập nhật thông tin dựa trên id
classRoute.delete("/:id", deleteClasses); // Cập nhật thông tin dựa trên id

export default classRoute;
