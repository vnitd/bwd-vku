import { Router } from "express";
import { create, deleteJoineds, getJoineds, updateJoineds } from "../controllers/joined.controller";


const joinedRoute: Router = Router();

joinedRoute.post("", create);

joinedRoute.get("/:id", getJoineds); // Truy vấn thông tin dựa trên id
joinedRoute.put("/:id", updateJoineds); // Cập nhật thông tin dựa trên id
joinedRoute.delete("/:id", deleteJoineds); // Cập nhật thông tin dựa trên id

export default joinedRoute;
