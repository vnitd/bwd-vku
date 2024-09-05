// import { Router } from "express";

import express from "express";
import { getInfos, updateInfos } from "../controllers/infos.controller";

// const infosRoute: Router = Router();

const infosRoute = express.Router();

infosRoute.get("/infos/:id", getInfos); // Truy vấn thông tin dựa trên id
infosRoute.put("/infos/:id", updateInfos); // Cập nhật thông tin dựa trên id

export default infosRoute;
