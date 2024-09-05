import mongoose from "mongoose";
import joinedSchema from "../schemas/joined.schema";
import { Joined } from "../models/joined.model";

async function createJoined(data: Joined) {
	try {
		// create mongo record
		const res = await joinedSchema.create<Joined>(data);

		return {
			status: 200,
			result: res,
		};
	} catch (err: any) {
		if (err?.errors?.classzz)
			return { status: 400, result: err?.errors?.classzz.message };
		if (err?.errors?.accountzz)
			return { status: 400, result: err?.errors?.accountzz.message };
		throw err;
	}
}

async function getJoined(id: string): Promise<any> {
	try {
		const res = await joinedSchema.findOne({
			_id: new mongoose.Types.ObjectId(id),
		});

		if (res == null) {
			return {
				status: 400,
				result: "JOINED_NOT_FOUND",
			};
		}

		return {
			status: 200,
			result: res,
		};
	} catch (err: any) {
		throw err;
	}
}

async function updateJoined(id: string, data: any): Promise<any> {
	try {
		const res = await joinedSchema.findOneAndUpdate(
			{ _id: new mongoose.Types.ObjectId(id) },
			{ $set: data },
			{ new: true, runValidators: true }
		);

		if (!res) {
			return {
				status: 400,
				result: "JOINED_NOT_FOUND",
			};
		}
		return {
			status: 200,
			result: res,
		};
	} catch (err: any) {
		throw err;
	}
}

async function deleteJoined(id: string): Promise<any> {
	try {
		// Tìm và xóa bản ghi theo id
		const res = await joinedSchema.findOneAndDelete({
			_id: new mongoose.Types.ObjectId(id),
		});

		if (!res) {
			return {
				status: 400,
				result: "JOINED_NOT_FOUND",
			};
		}
		return {
			status: 200,
			result: "DELETE_SUCCESS",
		};
	} catch (err: any) {
		throw err;
	}
}

export { createJoined, getJoined, updateJoined, deleteJoined };
