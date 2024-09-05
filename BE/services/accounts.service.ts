import { genSalt, hash } from "bcrypt";
import { Account } from "../models/account.model.js";
import accountsSchema from "../schemas/accounts.schema.js";

const saltRounds = 10;

async function addAccount(data: Account) {
	try {
		// check password
		if ((data.password?.length || 0) < 8) return { status: 400, result: "ACCOUNT_PASS_SHORT" };

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
			if (err?.keyPattern?.sid) return { status: 400, result: "ACCOUNT_ID_UNIQUE" };
			if (err?.keyPattern?.email) return { status: 400, result: "ACCOUNT_EMAIL_UNIQUE" };
		}
		if (err?.errors?.sid) return { status: 400, result: err?.errors?.sid.message };
		if (err?.errors?.email) return { status: 400, result: err?.errors?.email.message };
		throw err;
	}
}

export { addAccount };
