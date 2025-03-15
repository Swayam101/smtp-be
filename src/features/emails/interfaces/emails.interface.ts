import { ObjectId } from "mongodb"
import { Document } from "mongoose";

export interface IEmail extends Document {
    sentBy: ObjectId,
    from: string
    to: string,
    subject: string,
    html: string,
    caseId: string
    workerName: string,
    template: ObjectId
}