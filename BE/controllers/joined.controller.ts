import { NextFunction, Request, Response } from "express";
import { createJoined, deleteJoined, getJoined, updateJoined } from "../services/joined.service";
import { Joined } from "../models/joined.model";

async function create(req: Request, res: Response, next: NextFunction) {
	try {
		const message = await createJoined(req.body as Joined);
		res.status((message?.status as number) || 200).json(message);
	} catch (err) {
		next(err);
	}
}

async function getJoineds(req: Request, res: Response, next: NextFunction) {
	try {
		// Lấy id từ URL
		const message = await getJoined(req.params.id); // Sử dụng req.params.id
		res.status((message?.status as number) || 200).json(message);
	} catch (err) {
		next(err);
	}
}

async function updateJoineds(req: Request, res: Response, next: NextFunction) {
	try {
		// Lấy `id` từ URL và dữ liệu từ body
		const message = await updateJoined(req.params.id, req.body);
		res.status((message?.status as number) || 200).json(message);
	} catch (err) {
		next(err);
	}
}

async function deleteJoineds(req: Request, res: Response, next: NextFunction) {
	try {
		// Lấy `id` từ URL
		const message = await deleteJoined(req.params.id);
		res.status((message?.status as number) || 200).json(message);
	} catch (err) {
		next(err);
	}
}

export { create, getJoineds, updateJoineds, deleteJoineds };
