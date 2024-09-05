// // import { Router } from "express";

// import express from "express";
// import { getInfos, updateInfos } from "../controllers/infos.controller";

// // const infosRoute: Router = Router();

// const infosRoute = express.Router();

// infosRoute.get("/infos/:id", getInfos); // Truy vấn thông tin dựa trên id
// infosRoute.put("/infos/:id", updateInfos); // Cập nhật thông tin dựa trên id

// export default infosRoute;

import express from "express";
import {
	getInfos,
	updateInfos,
	uploadFileController,
} from "../controllers/infos.controller";

import multer from "multer";

const upload = multer({ storage: multer.memoryStorage() });

const infosRoute = express.Router();

infosRoute.get("/:id", getInfos); // Truy vấn thông tin dựa trên id
infosRoute.put("/:id", updateInfos); // Cập nhật thông tin dựa trên id
infosRoute.put(
	"/upload/:id/avatar",
	upload.single("image"),
	uploadFileController("avt")
); // Upload tệp
infosRoute.put(
	"/upload/:id/banner",
	upload.single("image"),
	uploadFileController("banner")
); // Upload tệp

export default infosRoute;
