import { Request, Response } from "express";
import { JsonResponse } from "../../../utils/jsonResponse.utils";
import { IGlobSettings } from "../interfaces/setting.interface";
import globalSettingsDao from "../dao/global-settings.dao";
import userDaos from "../../users/dao/user.daos";


export default async (req: Request, res: Response) => {
    const newGlobalSettings = req.body as Partial<IGlobSettings>

    await globalSettingsDao.updateGlobalSettings(newGlobalSettings)

    if (newGlobalSettings?.workerName) {
        await userDaos.user.updateGlobalWorkerName(newGlobalSettings?.workerName)
    }

    return JsonResponse(res, {
        status: "success",
        statusCode: 200,
        title: "SETTINGS UPDATE",
        message: "global settings update successfully",
    });
};