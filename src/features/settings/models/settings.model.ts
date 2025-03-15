import { model, Schema } from "mongoose";
import { ISettings } from "../interfaces/setting.interface";

const schema = new Schema<ISettings>({

}, { timestamps: true, strict: false })

export default model("settings", schema)