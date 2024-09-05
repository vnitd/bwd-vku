import { NextFunction, Request, Response } from "express";
import { Quiz } from "../models/quiz.model";
import { createQuiz, deleteQuiz, getQuiz, updateQuiz } from "../services/quiz.service";

async function create(req: Request, res: Response, next: NextFunction) {
	try {
		const message = await createQuiz(req.body as Quiz);
		res.status((message?.status as number) || 200).json(message);
	} catch (err) {
		next(err);
	}
}

async function getQuizs(req: Request, res: Response, next: NextFunction) {
	try {
		// Lấy id từ URL
		const message = await getQuiz(req.params.id); // Sử dụng req.params.id
		res.status((message?.status as number) || 200).json(message);
	} catch (err) {
		next(err);
	}
}

async function updateQuizs(req: Request, res: Response, next: NextFunction) {
	try {
		// Lấy `id` từ URL và dữ liệu từ body
		const message = await updateQuiz(req.params.id, req.body);
		res.status((message?.status as number) || 200).json(message);
	} catch (err) {
		next(err);
	}
}

async function deleteQuizs(req: Request, res: Response, next: NextFunction) {
	try {
		// Lấy `id` từ URL
		const message = await deleteQuiz(req.params.id);
		res.status((message?.status as number) || 200).json(message);
	} catch (err) {
		next(err);
	}
}

export { create, getQuizs, updateQuizs, deleteQuizs };
