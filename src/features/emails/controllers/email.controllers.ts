import { asyncWrapper } from "../../../utils/asyncWrapper";
import getAllEmailsController from "./getAllEmails.controller";
import getEmailByIdController from "./getEmailById.controller";
import getMyEmailsController from "./getMyEmails.controller";
import sendEmailController from "./sendEmail.controller";

export default {
    sendEmail: asyncWrapper(sendEmailController),
    getEmailById: asyncWrapper(getEmailByIdController),
    getAllEmails: asyncWrapper(getAllEmailsController),
    getMyEmails: asyncWrapper(getMyEmailsController)
}