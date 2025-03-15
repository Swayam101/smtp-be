import { Request, Response } from "express";
import { JsonResponse } from "../../../utils/jsonResponse.utils";
import { IEmail } from "../interfaces/emails.interface";
import emailsDao from "../dao/emails.dao";


export default async (req: Request, res: Response) => {
    const email = req.body as IEmail

    const createdEmail = await emailsDao.createEmail(email)

    if (!createdEmail) {
        return JsonResponse(res, {
            status: "error",
            statusCode: 400,
            message: "unable to create email log",
            title: "SEND MAIL",
        });
    }

    return JsonResponse(res, {
        status: "success",
        statusCode: 200,
        title: "SEND MAIL",
        message: "email sent successfully",
    });
};