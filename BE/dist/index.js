import express, { json, urlencoded } from "express";
import dotenv from "dotenv";
import normalizePort from "./utils/normalizePort.js";
import logger from "morgan";
import { createServer } from "http";
import { onError, onListening } from "./utils/appEvents.js";
import userRoute from "./routes/users.route.js";
import { connect } from "mongoose";
dotenv.config();
const app = express();
/**
 * Init mongoose.
 */
connect(process.env.MONGODB_URL)
    .then(() => {
    console.log("🚀 Connected to the server successful!");
})
    .catch((reason) => console.log(reason));
/**
 * Get port from .env and store in Express.
 */
const port = normalizePort(process.env.PORT || "3000");
app.set("port", port);
/**
 * Middleware setup.
 */
app.use(logger("dev"));
app.use(json());
app.use(urlencoded({ extended: false }));
/**
 * Routes setup.
 */
const apiPrefix = process.env.API_PREFIX;
app.use("/", (_req, res) => {
    res.json({ message: "Hello world!" });
});
app.use(`${apiPrefix}/users`, userRoute);
/**
 * Handle errors.
 */
app.use((err, _req, res, _next) => {
    console.error(err?.stack);
    res.status(500).json({ message: "Internal Server Error!", stack: err?.message });
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
