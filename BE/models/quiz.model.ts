import { ObjectId } from "mongoose";

export interface Quiz {
    _id: ObjectId;
	title: string;
    content: string;
	classzz: ObjectId;
}
