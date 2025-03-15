import { ObjectId } from "mongodb"

export interface ISettings {
    user: ObjectId
    [key: string]: string | ObjectId
}

export interface IGlobSettings {
    smtpip: string
    telegramBotId: string
    telegramChatId: string
    workerName: string
}