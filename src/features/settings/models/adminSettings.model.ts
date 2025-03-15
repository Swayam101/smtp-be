import { model, Schema } from "mongoose";
import { IGlobSettings } from "../interfaces/setting.interface";

const schema = new Schema<IGlobSettings>({
    smtpip: {
        type: String,
        required: true
    },
    telegramBotId: {
        type: String,
        required: true
    },
    telegramChatId: {
        type: String,
        required: true
    },
    workerName: String
}, { timestamps: true })


export default model("global-settings", schema)