import { NextFunction, Request, Response } from "express";
import { GoogleGenerativeAI } from "@google/generative-ai";

const postToAI = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const genAi = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string);
		const model = genAi.getGenerativeModel({ model: "gemini-pro" });
		const prompt = `Give me an answer that is a hint of the following question and don't use styles for your answer or answer directly the question. You just need to give a hint for the following question or step to solve problem, if the problem needs formulas to be solved, give the formulas also and you must answer the question with the same language as the question. The question is: \"${req.body?.data?.prompt}\". Once again, the answer must have the same language as the question and the answer should as details as well. And the answer should not have any format. Thank you!`;

		const result = await model.generateContent(prompt);
		const response = result.response;
		const output = response.text();

		return res.json({ result: output });
	} catch (err) {
		next(err);
	}
};

export { postToAI };
