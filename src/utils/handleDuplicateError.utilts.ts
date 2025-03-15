import { Response } from "express";
import { JsonResponse } from "./jsonResponse.utils";

export default (error: any, res: Response) => {

    const feildName = Object.keys(error.keyPattern)
    return JsonResponse(res, {
        status: "error",
        statusCode: 400,
        message: `${feildName} already in use.`,
        title: "DUPLICATE ENTRY",
    });

}