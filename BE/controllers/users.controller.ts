import { NextFunction, Request, Response } from "express";
import { addAccount, compareAccount } from "../services/accounts.service.js";
import { Account } from "../models/account.model.js";
import { createInfos } from "../services/infos.service.js";

async function register(req: Request, res: Response, next: NextFunction) {
	try {
		const message = await addAccount(req.body as Account);
		const infos = await createInfos(
			message?.result?._id,
			req.body?.name as string
		);
		res.status((message?.status as number) || 200).json({
			...message,
			info: infos,
		});
	} catch (err) {
		next(err);
	}
}

async function login(req: Request, res: Response, next: NextFunction) {
	try {
		const message = await compareAccount(req.query);
		res.status((message?.status as number) || 200).json(message);
	} catch (err) {
		next(err);
	}
}

export { register, login };
