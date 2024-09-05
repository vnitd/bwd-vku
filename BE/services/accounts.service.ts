import { genSalt, hash, compare } from "bcrypt";
import { Account } from "../models/account.model.js";
import accountsSchema from "../schemas/accounts.schema.js";

const saltRounds = 10;

async function addAccount(data: Account) {
	try {
		// check password
		if ((data.password?.length || 0) < 8)
			return { status: 400, result: "ACCOUNT_PASS_SHORT" };

		// hash password
		const salt = await genSalt(saltRounds);
		data.password = await hash(data.password, salt);

		// create mongo record
		const res = await accountsSchema.create<Account>(data);

		return {
			status: 200,
			result: res,
		};
	} catch (err: any) {
		if (err?.code === 11000) {
			if (err?.keyPattern?.sid)
				return { status: 400, result: "ACCOUNT_ID_UNIQUE" };
			if (err?.keyPattern?.email)
				return { status: 400, result: "ACCOUNT_ID_UNIQUE" };
		}
		if (err?.errors?.sid)
			return { status: 400, result: err?.errors?.sid.message };
		if (err?.errors?.email)
			return { status: 400, result: err?.errors?.email.message };
		throw err;
	}
}

async function compareAccount(data: any): Promise<any> {
	try {
		// create mongo record
		const res = await accountsSchema.findOne<any>({
			email: data?.email,
		});

		console.log(res?.password);

		if (await compare(data.password, res?.password as string))
			return {
				status: 200,
				result: res?.generateToken(),
			};
		return {
			status: 401,
			result: "UNAUTHORIZED",
		};
	} catch (err: any) {
		throw err;
	}
}

export { addAccount, compareAccount };
