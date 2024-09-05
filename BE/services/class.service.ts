import { Class } from "../models/class.model.js";
import classSchema from "../schemas/class.schema.js";

async function createClass(data: Class) {
	try {
		// create mongo record
		const res = await classSchema.create<Class>(data);

		return {
			status: 200,
			result: res,
		};
	} catch (err: any) {
		if (err?.errors?.name)
			return { status: 400, result: err?.errors?.name.message };
		if (err?.errors?.teacher)
			return { status: 400, result: err?.errors?.teacher.message };
		throw err;
	}
}

export { createClass };
