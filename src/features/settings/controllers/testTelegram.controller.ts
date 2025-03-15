import { Request, Response } from "express";
import { JsonResponse } from "../../../utils/jsonResponse.utils";


export default async (req: Request, res: Response) => {
  const { message, botToken, chatId } = req.body



  return JsonResponse(res, {
    status: "success",
    statusCode: 200,
    title: "",
    message: "",
  });
};