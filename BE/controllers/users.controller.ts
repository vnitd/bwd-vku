import { NextFunction, Request, Response } from "express";
import { addAccount } from "../services/accounts.service.js";
import { Account } from "../models/account.model.js";

async function register(req: Request, res: Response, next: NextFunction) {
	try {
		const message = await addAccount(req.body as Account);
		res.status((message?.status as number) || 200).json(message);
	} catch (err) {
		next(err);
	}
}

async function login(req: Request, res: Response, next: NextFunction) {
	try {
		res.json({ status: "ok" });
	} catch (err) {
		next(err);
	}
}

export { register, login };
