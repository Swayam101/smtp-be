import { NextFunction, Request, Response } from "express";
import { ITemplate } from "../interfaces/templates.interfaces";
import templateDao from "../dao/template.dao";
import { JsonResponse } from "../../../utils/jsonResponse.utils";

const createTemplate = async (req: Request, res: Response, _next: NextFunction) => {
    try {
        const { markup, name, email, category, emailName, feilds } = req.body as ITemplate;

        if (!markup || !name || !email || !category || !emailName) {
            return JsonResponse(res, {
                status: "error",
                statusCode: 400,
                message: "All fields are required",
                title: "TEMPLATE CREATION ERROR",
            });
        }

        const template = await templateDao.createTemplate({ markup, name, email, category, emailName, feilds });

        return JsonResponse(res, {
            status: "success",
            statusCode: 201,
            message: "Template created successfully",
            title: "TEMPLATE CREATION",
            data: template,
        });
    } catch (error) {
        console.error("Error creating template:", error);
        return JsonResponse(res, {
            status: "error",
            statusCode: 500,
            message: "Internal Server Error",
            title: "TEMPLATE CREATION ERROR",
        });
    }
};

export default createTemplate;
