import { NextFunction, Request, Response } from "express";
import templateDao from "../dao/template.dao";
import { JsonResponse } from "../../../utils/jsonResponse.utils";

export default async (req: Request, res: Response, _next: NextFunction) => {
    const { id } = req.params
    if (!id) return JsonResponse(res, {
        status: "error",
        statusCode: 400,
        message: "id is required",
        title: "TEMPLATE FETCH",
    });
    const template = await templateDao.getTemplateById(id)

    return JsonResponse(res, {
        status: "success",
        statusCode: 200,
        message: "template fetched successfully",
        title: "TEMPLATE FETCH",
        data: template
    });


}