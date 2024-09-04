import { addAccount } from "../services/accounts.service.js";
async function register(req, res, next) {
    try {
        const message = await addAccount(req.body);
        res.status(message?.status || 200).json(message);
    }
    catch (err) {
        next(err);
    }
}
export { register };
