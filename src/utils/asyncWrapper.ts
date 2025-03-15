import { NextFunction, Request, Response } from "express";
import { JsonResponse } from "./jsonResponse.utils";
import handleDuplicateErrorUtilts from "./handleDuplicateError.utilts";

export const asyncWrapper = (
  fn: (req: Request, res: Response, next: NextFunction) => Promise<void>
) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      return await fn(req, res, next);
    } catch (error: any) {
      if (error.code == "11000") {
        return handleDuplicateErrorUtilts(error, res)
      }

      return JsonResponse(res, {
        statusCode: 500,
        status: "error",
        message: (error as Error).message,
        title: "Something went wrong",
      });
    }
  };
};
