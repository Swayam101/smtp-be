import { model, Schema } from "mongoose";
import { IEmail } from "../interfaces/emails.interface";

const schema = new Schema<IEmail>({
    feilds: {
        type: Schema.Types.Mixed,
        required: true
    },
    markup: {
        type: String,
        required: true
    },
    sentBy: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "users"
    },
    sentTo:
    {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
    values: {
        type: Schema.Types.Mixed,
        required: true
    },
    workerName: {
        type: String,
        required: true,
    }


}, { timestamps: true })

export default model("email", schema)