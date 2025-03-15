import { Request, Response } from "express";
import { JsonResponse } from "../../../utils/jsonResponse.utils";
import { IUser } from "../interfaces/user.interface";
import userDaos from "../dao/user.daos";

export default async (req: Request, res: Response) => {
    const id = res.locals.user._id

    const { workerName, password } = req.body as IUser;

    if (!workerName && !password) {
        return JsonResponse(res, {
            status: "error",
            statusCode: 400,
            message: "provide new worker name or password to update",
            title: "USER PROFILE EDIT",
        });
    }

    await userDaos.user.editUser(id, { workerName, password });

    return JsonResponse(res, {
        status: "success",
        statusCode: 200,
        title: "USER UPDATE",
        message: "user updated successfully",
    });
};
