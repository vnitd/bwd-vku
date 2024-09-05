import { ObjectId } from "mongoose";

export interface Infos {
	account: ObjectId;
	name: string;
	gender: string;
	address: string;
	phone: string;
	dob: string;
	avt: string;
	banner: string;
	enable: Number;
}
