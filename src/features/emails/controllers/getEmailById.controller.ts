import { Request, Response } from "express";
import { JsonResponse } from "../../../utils/jsonResponse.utils";
import emailsDao from "../dao/emails.dao";


export default async (req: Request, res: Response) => {
    const { id } = req.params

    if (!id) return JsonResponse(res, {
        status: "error",
        statusCode: 400,
        message: "id is required",
        title: "EMAIL LOG FETCH",
    });

    const email = await emailsDao.getEmailById(id)

    return JsonResponse(res, {
        status: "success",
        statusCode: 200,
        title: "EMAIL LOG FETCH",
        message: "email log fetched successfully",
        data: email
    });
};