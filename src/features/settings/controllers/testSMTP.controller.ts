import { Request, Response } from "express";
import { JsonResponse } from "../../../utils/jsonResponse.utils";
import emailsServices from "../../emails/services/emails.services";


export default async (req: Request, res: Response) => {
    const {
        to, from, subject, html
    } = req.body

    await emailsServices.sendEmail({
        from,
        to,
        subject,
        html,
        from_name: "xtz"
    })

    return JsonResponse(res, {
        status: "success",
        statusCode: 200,
        title: "SMTP TEST",
        message: "mail test executed , check inbox for confirmation",
    });
};