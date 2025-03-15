import { Model, model, Schema } from "mongoose";
import { ITemplate } from "../interfaces/templates.interfaces";

const schema = new Schema<ITemplate>(
    {
        markup: {
            type: String,
            required: true,
        },

        name: {
            type: String,
            require: true
        },
        category: {
            type: String,
            require: true
        },
        email: String,
        emailName: String
    },
    { timestamps: true }
);

export default model<ITemplate>("templates", schema) as Model<ITemplate>;
