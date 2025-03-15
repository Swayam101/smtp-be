import { ObjectId } from "mongodb"
import { ITemplate } from "../../templates/interfaces/templates.interfaces";
import { Document } from "mongoose";

export interface IEmail extends ITemplate, Document {
    sentBy: ObjectId,
    sentTo: string,
    subject: string,
    values: { [key: string]: string },
    workerName: string,
}