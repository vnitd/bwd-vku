// import { NextFunction, Request, Response } from "express";
// import { createInfos, getInfo, updateInfo } from "../services/infos.service";
// import { Infos } from "../models/infos.model";
// import {
// 	ref,
// 	getStorage,
// 	uploadBytesResumable,
// 	getDownloadURL,
// } from "firebase/storage";

// import multer from "multer";

// const storage = getStorage();
// const upload = multer({ storage: multer.memoryStorage() });

// /* GET users listing. */
// router.post("", upload.single("file"), async (req, res, next) => {
// 	try {
// 		const storageRef = ref(storage, `imgs/${uuidv6()}`);
// 		const metadata = {
// 			contentType: req.file.mimetype,
// 		};
// 		console.log(metadata);
// 		const snapshot = await uploadBytesResumable(
// 			storageRef,
// 			req.file.buffer,
// 			metadata
// 		);
// 		const downloadUrl = await getDownloadURL(snapshot.ref);
// 		console.log("File successfully uploaded!");
// 		res.json({
// 			message: "file uploaded to firebase storage",
// 			name: req.file.originalname,
// 			type: req.file.mimetype,
// 			downloadURL: downloadUrl,
// 		});
// 	} catch (e) {
// 		res.status(500).json(e);
// 	}
// });

// async function getInfos(req: Request, res: Response, next: NextFunction) {
// 	try {
// 		// Lấy id từ URL
// 		const message = await getInfo(req.params.id); // Sử dụng req.params.id
// 		res.status((message?.status as number) || 200).json(message);
// 	} catch (err) {
// 		next(err);
// 	}
// }

// async function updateInfos(req: Request, res: Response, next: NextFunction) {
// 	try {
// 		// Lấy `id` từ URL và dữ liệu từ body
// 		const message = await updateInfo(req.params.id, req.body);
// 		res.status((message?.status as number) || 200).json(message);
// 	} catch (err) {
// 		next(err);
// 	}
// }

// export { getInfos, updateInfos };

import { NextFunction, Request, Response } from "express";
import { getInfo, updateInfo, uploadFile } from "../services/infos.service";

const uploadFileController =
	(field: string) =>
	async (req: Request, res: Response, next: NextFunction) => {
		try {
			if (!req.file) {
				return res.status(400).json({ message: "No file uploaded." });
			}
			const id = req.params?.id;

			const downloadUrl = await uploadFile(req.file);
			const result = await updateInfo(id, { [field]: downloadUrl });
			res.json({
				status: 200,
				result,
			});
		} catch (e) {
			res.status(500).json(e);
		}
	};

async function getInfos(req: Request, res: Response, next: NextFunction) {
	try {
		// Lấy id từ URL
		const message = await getInfo(req.params.id); // Sử dụng req.params.id
		res.status((message?.status as number) || 200).json(message);
	} catch (err) {
		next(err);
	}
}

async function updateInfos(req: Request, res: Response, next: NextFunction) {
	try {
		const { id } = req.params;
		const { avatar, banner } = req.body;

		let updatedData: any = {};

		const message = await updateInfo(id, updatedData);
		res.status((message?.status as number) || 200).json(message);
	} catch (err) {
		next(err);
	}
}

export { uploadFileController, updateInfos, getInfos };
