import { Request, Response } from "express";
import { JsonResponse } from "../../../utils/jsonResponse.utils";
import globalSettingsDao from "../dao/global-settings.dao";


export default async (_req: Request, res: Response) => {

    const settings = await globalSettingsDao.getGlobalSettings()

    return JsonResponse(res, {
        status: "success",
        statusCode: 200,
        title: "SETTINGS UPDATED",
        message: "settings fetched successfully",
        data: settings
    });
};