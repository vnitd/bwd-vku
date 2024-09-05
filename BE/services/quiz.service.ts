import mongoose from "mongoose";
import quizSchema from "../schemas/quiz.schema";
import { Quiz } from "../models/quiz.model";

async function createQuiz(data: Quiz) {
	try {
		// create mongo record
		const res = await quizSchema.create<Quiz>(data);

		return {
			status: 200,
			result: res,
		};
	} catch (err: any) {
		if (err?.errors?.title)
			return { status: 400, result: err?.errors?.title.message };
		if (err?.errors?.content)
			return { status: 400, result: err?.errors?.content.message };
        if (err?.errors?.classzz)
			return { status: 400, result: err?.errors?.classzz.message };
		throw err;
	}
}

async function getQuiz(id: string): Promise<any> {
	try {
		const res = await quizSchema.findOne({
			_id: new mongoose.Types.ObjectId(id),
		});

		if (res == null) {
			return {
				status: 400,
				result: "QUIZ_NOT_FOUND",
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

async function updateQuiz(id: string, data: any): Promise<any> {
	try {
		const res = await quizSchema.findOneAndUpdate(
			{ _id: new mongoose.Types.ObjectId(id) },
			{ $set: data },
			{ new: true, runValidators: true }
		);

		if (!res) {
			return {
				status: 400,
				result: "QUIZ_NOT_FOUND",
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

async function deleteQuiz(id: string): Promise<any> {
	try {
		// Tìm và xóa bản ghi theo id
		const res = await quizSchema.findOneAndDelete({
			_id: new mongoose.Types.ObjectId(id),
		});

		if (!res) {
			return {
				status: 400,
				result: "INFO_NOT_FOUND",
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

export { createQuiz, getQuiz, updateQuiz, deleteQuiz };
