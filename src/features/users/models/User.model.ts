import { Model, model, Schema } from "mongoose";
import { ERoles, IUser } from "../interfaces/user.interface";

const schema = new Schema<IUser>(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
      default: true,
    },
    role:{
      type:String,
      required:true,
      enum:Object.values(ERoles)
    },
    workerName:String
  },
  { timestamps: true }
);

export default model("user", schema) as Model<IUser>;
