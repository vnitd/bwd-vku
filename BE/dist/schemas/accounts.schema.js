import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
const { String } = Schema.Types;
const accountSchema = new Schema({
    sid: {
        type: String,
        required: [true, "ACCOUNT_ID_REQUIRED"],
        unique: true,
    },
    email: {
        type: String,
        required: [true, "ACCOUNT_EMAIL_REQUIRED"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "ACCOUNT_PASSWORD_REQUIRED"],
    },
}, {
    timestamps: true,
});
accountSchema.methods.generateToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.TOKEN_SECRET, {
        expiresIn: "1h",
    });
    return token;
};
export default mongoose.model("accounts", accountSchema);
