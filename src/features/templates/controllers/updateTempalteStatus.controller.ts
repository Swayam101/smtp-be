import { Request, Response } from "express";
import { JsonResponse } from "../../../utils/jsonResponse.utils";
import templateDao from "../dao/template.dao";
import templatesModel from "../models/templates.model";


export default async (req: Request, res: Response) => {
    const { id } = req.params

    if (!id) return JsonResponse(res, {
        status: "error",
        statusCode: 400,
        message: "id is required",
        title: "UPDATE TEMPLATE STATUS",
    });

    const template = await templatesModel.findById(id)

    if (!template) return JsonResponse(res, {
        status: "error",
        statusCode: 400,
        message: "template not found",
        title: "TEMPLATE STATUS UPDAT",
    });

    template.inactive = !template.inactive

    await template.save()

    return JsonResponse(res, {
        status: "success",
        statusCode: 200,
        title: "TEMPLATE STATUS UPDATE",
        message: "template status updated successfully",
    });

};