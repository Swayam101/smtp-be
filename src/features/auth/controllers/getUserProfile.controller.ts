import { Request, Response } from "express";
import { JsonResponse } from "../../../utils/jsonResponse.utils";

export default async (_req: Request, res: Response) => {
  const user = res.locals.user;

  const { password, ...userData } = user;

  return JsonResponse(res, {
    status: "success",
    statusCode: 200,
    title: "USER PROFILE",
    message: "user profile fetched successfully",
    data: {
      user: userData,
    },
  });
};
