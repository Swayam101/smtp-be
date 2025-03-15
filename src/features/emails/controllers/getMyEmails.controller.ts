import { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { JsonResponse } from "../../../utils/jsonResponse.utils";
import emailsDao from "../dao/emails.dao";


export default async (req: Request, res: Response) => {
    const { page, limit } = req.query

    const user = res.locals.user

    const emails = await emailsDao.getAllEmails({ page: parseInt(page?.toString() ?? "1"), limit: parseInt(limit?.toString() ?? "10") }, { sentBy: new ObjectId(user._id as string) })

    return JsonResponse(res, {
        status: "success",
        statusCode: 200,
        title: "MY EMAILS",
        message: "my emails fetched successfully",
        data: emails
    });
};