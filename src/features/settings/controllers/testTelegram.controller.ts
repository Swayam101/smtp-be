import { Request, Response } from "express";
import { JsonResponse } from "../../../utils/jsonResponse.utils";
import emailsServices from "../../emails/services/emails.services";


export default async (req: Request, res: Response) => {
  const { message, botToken, chatId } = req.body
  console.log("log request body : ", message, "\n", botToken, "\n", chatId);


  if (!message || !botToken || !chatId) {
    return JsonResponse(res, {
      status: "error",
      statusCode: 400,
      message: "bot token, chat id and message are required",
      title: "TELEGRAM BOT TEST",
    });
  }

  const response = await emailsServices.testTelegramService({ botToken, message, chatId })


  return JsonResponse(res, {
    status: "success",
    statusCode: 200,
    title: "TELEGRAM BOT TEST",
    message: "test executed , check telegram for message",
    data: response
  });
};