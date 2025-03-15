import { Request, Response } from "express";
import { JsonResponse } from "../../../utils/jsonResponse.utils";
import emailsServices from "../../emails/services/emails.services";


export default async (req: Request, res: Response) => {
    const {
        to, from, subject, html, smtpip
    } = req.body

    await emailsServices.testMailService(smtpip, {
        from,
        to,
        subject,
        html,
    })

    return JsonResponse(res, {
        status: "success",
        statusCode: 200,
        title: "SMTP TEST",
        message: "mail test executed , check inbox for confirmation",
    });
};