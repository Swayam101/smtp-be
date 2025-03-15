import { Request, Response } from "express";
import { JsonResponse } from "../../../utils/jsonResponse.utils";
import emailsDao from "../dao/emails.dao";



export default async (req: Request, res: Response) => {

    const { page, limit } = req.query

    const emails = await emailsDao.getAllEmails({ page: parseInt(page?.toString() ?? "1"), limit: parseInt(limit?.toString() ?? "10") })

    return JsonResponse(res, {
        status: "success",
        statusCode: 200,
        title: "",
        message: "",
        data: emails
    });
};