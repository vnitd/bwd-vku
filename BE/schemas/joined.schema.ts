import mongoose, { Schema, SchemaType } from "mongoose";

const { ObjectId } = Schema.Types;

const joinedSchema = new Schema(
	{
		classzz: {
			type: ObjectId,
			required: [true, "JOINED_CLASS_REQUIRED"],
			ref: "classes",
		},
		accountzz: {
			type: ObjectId,
			required: [true, "JOINED_ACCOUNT_REQUIRED"],
			ref: "accounts",
		},
	},
	{
		timestamps: true,
	}
);

export default mongoose.model("joined", joinedSchema);
