import { NextFunction, Request, Response } from "express";
import { createInfos, getInfo, updateInfo } from "../services/infos.service";
import { Infos } from "../models/infos.model";

async function getInfos(req: Request, res: Response, next: NextFunction) {
	try {
		// Lấy id từ URL
		const message = await getInfo(req.params.id); // Sử dụng req.params.id
		res.status((message?.status as number) || 200).json(message);
	} catch (err) {
		next(err);
	}
}

async function updateInfos(req: Request, res: Response, next: NextFunction) {
	try {
		// Lấy `id` từ URL và dữ liệu từ body
		const message = await updateInfo(req.params.id, req.body);
		res.status((message?.status as number) || 200).json(message);
	} catch (err) {
		next(err);
	}
}

export { getInfos, updateInfos };
