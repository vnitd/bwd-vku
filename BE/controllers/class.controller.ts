import { NextFunction, Request, Response } from "express";
import { Class } from "../models/class.model";
import { createClass } from "../services/class.service";

async function create(req: Request, res: Response, next: NextFunction) {
	try {
		const message = await createClass(req.body as Class);
		res.status((message?.status as number) || 200).json(message);
	} catch (err) {
		next(err);
	}
}

export { create };
