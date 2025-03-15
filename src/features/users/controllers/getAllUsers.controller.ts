import { Request, Response } from "express";
import { FilterQuery } from "mongoose";

import userDaos from "../dao/user.daos";

import { JsonResponse } from "../../../utils/jsonResponse.utils";
import { ERoles, IUser } from "../interfaces/user.interface";

export default async (req: Request, res: Response) => {
  const { page, limit, search, role } = req.query;

  console.log("res locals user ,", res.locals.user);

  const isAdminFetchingOwners = res.locals.user.role === ERoles.ADMIN && role === ERoles.OWNER

  if (isAdminFetchingOwners) {
    return JsonResponse(res, {
      status: "error",
      statusCode: 400,
      message: "admin cannot fetch owners",
      title: "UNAUTHORISED ACCESS",
    });
  }

  const filter: FilterQuery<IUser> = {};

  if (role) filter.role = role

  if (search) {
    filter.username = { $regex: search ?? "", $options: "i" }
    filter.workerName = { $regex: search ?? "", $options: "i" }
  };

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
