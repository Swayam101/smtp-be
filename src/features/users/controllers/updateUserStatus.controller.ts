import { Request, Response } from "express";

import { JsonResponse } from "../../../utils/jsonResponse.utils";
import userDaos from "../dao/user.daos";

export default async (req: Request, res: Response) => {

  const { id } = req.params

  if (!id) {
    return JsonResponse(res, {
      status: "error",
      statusCode: 400,
      message: "id is required",
      title: "USER STATUS UPDATE",
    });
  }

  await userDaos.user.updateUserStatus(id);

  return JsonResponse(res, {
    status: "success",
    statusCode: 200,
    title: "USER STATUS UPDATE",
    message: "User status update successful",
  });
};
