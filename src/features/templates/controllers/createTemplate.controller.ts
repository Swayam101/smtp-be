import { NextFunction, Request, Response } from "express";
import { ITemplate } from "../interfaces/templates.interfaces";
import templateDao from "../dao/template.dao";
import { JsonResponse } from "../../../utils/jsonResponse.utils";

const createTemplate = async (req: Request, res: Response, _next: NextFunction) => {
    const { markup, feilds, name, email, category } = req.body as ITemplate

    await templateDao.createTemplate({ feilds, markup, name, email, category })

    return JsonResponse(res, {
        status: "error",
        statusCode: 400,
        message: "template created successfully",
        title: "TEMPLATE CREATION",
    });

}

export default createTemplate