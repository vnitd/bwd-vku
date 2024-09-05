import mongoose, { Schema, SchemaType } from "mongoose";

const { String } = Schema.Types;

const languageSchema = new Schema({
	code: {
		type: String,
		required: true,
	},
	lang: {
		type: String,
		required: true,
	},
	content: {
		type: String,
		required: true,
	},
});

export default mongoose.model("languages", languageSchema);
