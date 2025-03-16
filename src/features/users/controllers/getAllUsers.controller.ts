import { Request, Response } from "express";
import { FilterQuery } from "mongoose";

import userDaos from "../dao/user.daos";

import { JsonResponse } from "../../../utils/jsonResponse.utils";
import { ERoles, IUser } from "../interfaces/user.interface";

export default async (req: Request, res: Response) => {
  const { page, limit, search, role } = req.query;

  // Prevent fetching owners for everyone
  const filter: FilterQuery<IUser> = { role: { $ne: ERoles.OWNER } };

  if (role && role !== ERoles.OWNER) {
    filter.role = role;
  }

  if (search) {
    filter.$or = [
      { username: { $regex: search, $options: "i" } },
      { workerName: { $regex: search, $options: "i" } },
    ];
  }

  const users = await userDaos.user.getAllUsers(filter, {
    page: parseInt(page?.toString() ?? "1"),
    limit: parseInt(limit?.toString() ?? "10"),
  });

  return JsonResponse(res, {
    status: "success",
    statusCode: 200,
    title: "USERS FETCH",
    message: "Users fetched successfully",
    data: {
      users,
    },
  });
};
