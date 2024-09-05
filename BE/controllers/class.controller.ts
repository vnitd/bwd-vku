import { NextFunction, Request, Response } from "express";
import { Class } from "../models/class.model";
import { createClass, deleteClass, getClass, updateClass } from "../services/class.service";

async function create(req: Request, res: Response, next: NextFunction) {
	try {
		const message = await createClass(req.body as Class);
		res.status((message?.status as number) || 200).json(message);
	} catch (err) {
		next(err);
	}
}

async function getClasses(req: Request, res: Response, next: NextFunction) {
	try {
		// Lấy id từ URL
		const message = await getClass(req.params.id); // Sử dụng req.params.id
		res.status((message?.status as number) || 200).json(message);
	} catch (err) {
		next(err);
	}
}

async function updateClasses(req: Request, res: Response, next: NextFunction) {
	try {
		// Lấy `id` từ URL và dữ liệu từ body
		const message = await updateClass(req.params.id, req.body);
		res.status((message?.status as number) || 200).json(message);
	} catch (err) {
		next(err);
	}
}

async function deleteClasses(req: Request, res: Response, next: NextFunction) {
	try {
		// Lấy `id` từ URL
		const message = await deleteClass(req.params.id);
		res.status((message?.status as number) || 200).json(message);
	} catch (err) {
		next(err);
	}
}

export { create, getClasses, updateClasses, deleteClasses };
