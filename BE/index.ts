import express, { Express, json, NextFunction, Request, Response, urlencoded } from "express";
import dotenv from "dotenv";
import normalizePort from "./utils/normalizePort";
import logger from "morgan";
import { createServer } from "http";
import { onError, onListening } from "./utils/appEvents";
import { connect } from "mongoose";
import userRoute from "./routes/users.route";
import classRoute from "./routes/class.route";
import infosRoute from "./routes/infos.route";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import cors from "cors";
import geminiRoute from "./routes/gemini.route";

dotenv.config();
const firebaseConfig = {
	apiKey: process.env.API_KEY,
	authDomain: process.env.AUTH_DOMAIN,
	projectId: process.env.PROJECT_ID,
	storageBucket: process.env.STORAGE_BUCKET,
	messagingSenderId: process.env.MESSAGING_SENDER_ID,
	appId: process.env.APP_ID,
	measurementId: process.env.MEASUREMENT_ID,
};

const app: Express = express();

/**
 * Init mongoose.
 */
connect(process.env.MONGODB_URL as string)
	.then(() => {
		console.log("🚀 Connected to the server successful!");
	})
	.catch((reason) => console.log(reason));

// Khởi tạo Firebase
const app_ = initializeApp(firebaseConfig);

// Khởi tạo Firebase Storage
const storage = getStorage(app_);

export { storage };
/**
 * Get port from .env and store in Express.
 */
const port: any = normalizePort(process.env.PORT || "8080");
app.set("port", port);

/**
 * Middleware setup.
 */
app.use(logger("dev"));
app.use(json());
app.use(urlencoded({ extended: false }));
console.log(process.env.FE_URL);
app.use(
	cors({
		origin: "*",
		optionsSuccessStatus: 200,
	})
);
app.options("*", cors());
app.use((req, res, next) => {
	if (req.method === "OPTIONS") {
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH,OPTIONS");
		res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, Content-Length, X-Requested-With");
		return res.sendStatus(200);
	}
	next();
});

/**
 * Routes setup.
 */
const apiPrefix = process.env.API_PREFIX;
console.log(apiPrefix);
app.get("/", (_req, res) => {
	res.json({ message: "Hello world!" });
});
app.use(`${apiPrefix}/users`, userRoute);
app.use(`${apiPrefix}/classes`, classRoute);
app.use(`${apiPrefix}/infos`, infosRoute);
app.use(`${apiPrefix}/gemini`, geminiRoute);

/**
 * Handle errors.
 */
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
	console.error(err?.stack);
	res.status(500).json({
		message: "Internal Server Error!",
		stack: err?.message,
	});
});

/**
 * Create HTTP server.
 */
var server = createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port);
server.on("error", onError(port));
server.on("listening", onListening(server));
