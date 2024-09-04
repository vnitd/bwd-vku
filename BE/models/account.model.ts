import { ObjectId } from "mongoose";

export interface Account {
	_id: ObjectId;
	sid: string;
	email: string;
	password: string;
}
