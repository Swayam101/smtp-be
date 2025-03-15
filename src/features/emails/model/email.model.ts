import { model, Schema } from "mongoose";
import { IEmail } from "../interfaces/emails.interface";

const schema = new Schema<IEmail>({
    html: {
        type: String,
        required: true
    },
    sentBy: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "users"
    },
    to: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
    workerName: {
        type: String,
        required: true,
    },
    caseId: String,
    from: {
        type: String,
        required: true,
    },
    template: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "templates"
    }


}, { timestamps: true })

export default model("email", schema)