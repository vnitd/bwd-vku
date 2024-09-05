import mongoose, { Schema, SchemaType } from "mongoose";

const { String, ObjectId } = Schema.Types;

const quizSchema = new Schema(
	{
		title: {
			type: String,
			required: [true, "QUIZ_TITLE_REQUIRED"],
		},
        content: {
			type: String,
			// required: [true, "QUIZ_CONTENT_REQUIRED"],
		},
		classzz: {
			type: ObjectId,
			required: [true, "QUIZ_CLASS_REQUIRED"],
			ref: "classes",
		},
	},
	{
		timestamps: true,
	}
);

export default mongoose.model("quizs", quizSchema);
