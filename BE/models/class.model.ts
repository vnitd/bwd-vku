import { ObjectId } from "mongoose";

export interface Class {
    _id: ObjectId;
	name: string;
	teacher: ObjectId;
}
