import mongoose, { ObjectId } from "mongoose";
import { Infos } from "../models/infos.model";
import infosSchema from "../schemas/infos.schema";
import { v6 as uuidv6 } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "..";

async function createInfos(account: ObjectId, name: String) {
	try {
		// create mongo record
		const res = await infosSchema.create<any>({ account, name });

		return {
			status: 200,
			result: res,
		};
	} catch (err: any) {
		if (err?.errors?.account)
			return { status: 400, result: err?.errors?.account.message };
		if (err?.errors?.name)
			return { status: 400, result: err?.errors?.name.message };
		if (err?.errors?.enable)
			return { status: 400, result: err?.errors?.enable.message };
		throw err;
	}
}

async function getInfo(id: string): Promise<any> {
	try {
		const res = await infosSchema.findOne({
			account: new mongoose.Types.ObjectId(id),
		});

		if (res == null) {
			return {
				status: 400,
				result: "INFO_NOT_FOUND",
			};
		}

		return {
			status: 200,
			result: res,
		};
	} catch (err: any) {
		throw err;
	}
}

async function updateInfo(id: string, data: any): Promise<any> {
	try {
		const res = await infosSchema.findOneAndUpdate(
			{ account: new mongoose.Types.ObjectId(id) },
			{ $set: data },
			{ new: true, runValidators: true }
		);

		if (!res) {
			return {
				status: 400,
				result: "INFO_NOT_FOUND",
			};
		}
		return {
			status: 200,
			result: res,
		};
	} catch (err: any) {
		throw err;
	}
}

async function uploadFile(file: Express.Multer.File): Promise<string> {
	const storageRef = ref(storage, `imgs/${uuidv6()}`);
	const metadata = {
		contentType: file.mimetype,
	};

	const snapshot = await uploadBytesResumable(
		storageRef,
		file.buffer,
		metadata
	);
	const downloadUrl = await getDownloadURL(snapshot.ref);

	return downloadUrl;
}

export { createInfos, getInfo, updateInfo, uploadFile };
