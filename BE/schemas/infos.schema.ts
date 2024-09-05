import mongoose, { Schema, SchemaType } from "mongoose";

const { Number, String, ObjectId } = Schema.Types;

const infosSchema = new Schema(
	{
		account: {
			type: ObjectId,
			required: [true, "INFOS_ACCOUNT_REQUIRED"],
		},
		name: {
			type: String,
			required: [true, "INFOS_NAME_REQUIRED"],
		},
		gender: {
			type: String,
		},
		address: {
			type: String,
		},
		phone: {
			type: String,
		},
		dob: {
			type: String,
		},
		avt: {
			type: String,
		},
		banner: {
			type: String,
		},
		enable: {
			type: Number,
			default: 0,
		},
		role: {
			type: String,
			default: "Student",
		},
	},
	{
		timestamps: true,
	}
);

export default mongoose.model("infos", infosSchema);
