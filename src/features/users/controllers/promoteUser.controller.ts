import { Request, Response } from "express";
import { JsonResponse } from "../../../utils/jsonResponse.utils";
import userDaos from "../dao/user.daos";
import { ERoles } from "../interfaces/user.interface";


export default async (req: Request, res: Response) => {

    const { id } = req.params

    if (!id) return JsonResponse(res, {
        status: "error",
        statusCode: 400,
        message: "promote",
        title: "PROMOTE USER",
    });

    const user = await userDaos.user.getUserById(id)

    if (user?.role === ERoles.OWNER) return JsonResponse(res, {
        status: "error",
        statusCode: 400,
        message: "owner cannot be promoted further",
        title: "PROMOTE USER",
    });

    if (user?.role === ERoles.USER) {
        user.role = ERoles.ADMIN
    } else if (user?.role === ERoles.ADMIN) {
        user.role = ERoles.OWNER
    }
    await user?.save()

    return JsonResponse(res, {
        status: "success",
        statusCode: 200,
        title: "PROMOTE USER",
        message: "user promoted successfully",
    });
};