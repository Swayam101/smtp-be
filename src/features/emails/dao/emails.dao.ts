import { FilterQuery } from "mongoose"
import paginate from "../../../utils/paginateQuery.utils"
import { IEmail } from "../interfaces/emails.interface"
import emailModel from "../model/email.model"

const createEmail = (email: Partial<IEmail>) => {
    return emailModel.create(email)
}

const getEmailById = (id: string) => {
    return emailModel.findById(id)
}

const getAllEmails = ({ limit, page }: { page: number, limit: number }, filter?: FilterQuery<IEmail>) => {
    return paginate(emailModel, filter || {}, page, limit, { createdAt: -1 }, "sentBy")
}

export default {
    createEmail,
    getEmailById,
    getAllEmails
}