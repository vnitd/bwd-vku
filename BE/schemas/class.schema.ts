import mongoose, { Schema, SchemaType } from "mongoose";
import jwt from "jsonwebtoken";

const { String, ObjectId } = Schema.Types;

const classSchema = new Schema(
	{
		name: {
			type: String,
			required: [true, "CLASS_NAME_REQUIRED"],
		},
		teacher: {
			type: ObjectId,
			required: [true, "CLASS_TEACHER_REQUIRED"],
			ref: "accounts",
		},
	},
	{
		timestamps: true,
	}
);

export default mongoose.model("classes", classSchema);
