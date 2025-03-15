import { Request, Response } from "express";
import { JsonResponse } from "../../../utils/jsonResponse.utils";
import userDaos from "../dao/user.daos";

export default async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!id)
    return JsonResponse(res, {
      status: "error",
      statusCode: 400,
      message: "id is required",
      title: "USER PROFILE FETCH",
    });

  const data = await userDaos.user.getUserById(id?.toString() ?? "12345");

  if (!data) return JsonResponse(res, {
    status: "error",
    statusCode: 400,
    message: "user not found",
    title: "USER PROFILE FETCH",
  });

  const { password, ...user } = data.toObject()

  return JsonResponse(res, {
    status: "success",
    statusCode: 200,
    title: "USER FETCH",
    message: "user fetched successfully",
    data: {
      user,
    },
  });
};
