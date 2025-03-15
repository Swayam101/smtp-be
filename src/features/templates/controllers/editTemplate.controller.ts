import { NextFunction, Request, Response } from "express";
import { ITemplate } from "../interfaces/templates.interfaces";
import templateDao from "../dao/template.dao";
import { JsonResponse } from "../../../utils/jsonResponse.utils";

const editTemplate = async (req: Request, res: Response, _next: NextFunction) => {
    const { id } = req.params
    if (!id) return JsonResponse(res, {
        status: "error",
        statusCode: 400,
        message: "id is required",
        title: "EDIT TEMPLATE",
    });
    const template = req.body as ITemplate

    await templateDao.editTemplate(id, template)

    return JsonResponse(res, {
        status: "error",
        statusCode: 400,
        message: "template created successfully",
        title: "EDIT TEMPLATE",
    });

}

export default editTemplate