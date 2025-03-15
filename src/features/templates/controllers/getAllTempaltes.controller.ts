import { Request, Response } from "express";
import { JsonResponse } from "../../../utils/jsonResponse.utils";
import templateDao from "../dao/template.dao";
import { FilterQuery } from "mongoose";
import { ITemplate } from "../interfaces/templates.interfaces";


export default async (req: Request, res: Response) => {
    const { page, limit, search } = req.query

    const filter: FilterQuery<ITemplate> = {};

    if (search) {
        filter.name = { $regex: search ?? "", $options: "i" }
    };

    const templates = await templateDao.getAllTemplates({ page: parseInt(page?.toString() ?? "1"), limit: parseInt(limit?.toString() ?? "1") })

    return JsonResponse(res, {
        status: "success",
        statusCode: 200,
        title: "ALL TEMPLATES",
        message: "templates fetched successfully",
        data: templates
    });
};