import { Request, Response } from "express";
import { JsonResponse } from "../../../utils/jsonResponse.utils";
import { IEmail } from "../interfaces/emails.interface";
import emailsDao from "../dao/emails.dao";
import emailsServices from "../services/emails.services";


export default async (req: Request, res: Response) => {
    const { from, to, subject, html, caseId, workerName, template, fromName } = req.body as IEmail & { fromName: string }

    const senderId = res.locals.user._id

    const createdEmail = await emailsDao.createEmail({
        sentBy: senderId,
        from,
        to,
        subject,
        html,
        caseId,
        workerName,
        template
    })

    if (!createdEmail) {
        return JsonResponse(res, {
            status: "error",
            statusCode: 400,
            message: "unable to create email log",
            title: "SEND MAIL",
        });
    }

    await emailsServices.sendEmail({
        from,
        from_name: fromName,
        to,
        subject,
        html,
    })

    return JsonResponse(res, {
        status: "success",
        statusCode: 200,
        title: "SEND MAIL",
        message: "email sent successfully",
    });
};