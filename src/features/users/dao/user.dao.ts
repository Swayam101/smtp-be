import { FilterQuery } from "mongoose";
import { IUser } from "../interfaces/user.interface";
import UserModels from "../models/user.models";
import { IPaging } from "../../../interface/paging.interface";
import paginate from "../../../utils/paginateQuery.utils";

const createUser = (
  user: Pick<IUser, "username" | "password" | "role" | "workerName">
) => {
  return UserModels.User.create(user);
};

const initialiseOwner = () => {
  return UserModels.User.findOneAndUpdate({ username: "owner" }, { username: "owner", password: "123456", role: "owner" }, { upsert: true })
}

const getUserById = (id: string) => {
  return UserModels.User.findById(id);
};

const getUserForLogin = (data: Pick<IUser, "username" | "password">) => {
  return UserModels.User.findOne(data);
};

const updatePassword = (id: string, password: IUser["password"]) => {
  return UserModels.User.findByIdAndUpdate(id, { $set: { password } });
};

const updateUserStatus = (id: string) => {
  return UserModels.User.findByIdAndUpdate(id, [{ $set: { status: { $not: 1 } } }]);
};

const getAllUsers = (filter: FilterQuery<IUser>, { limit, page }: IPaging) => {
  return paginate(
    UserModels.User as any,
    filter,
    page,
    limit,
    {
      updatedAt: -1,
    },
    []
  );
};

const editUser = (id: IUser["id"], update: Partial<IUser>) => {
  return UserModels.User.findByIdAndUpdate(id, { $set: update });
};

const updateGlobalWorkerName = (workerName: string) => {
  return UserModels.User.updateMany({ role: "user" }, { $set: { workerName } })
}

export default {
  initialiseOwner,
  getUserForLogin,
  createUser,
  getUserById,
  updatePassword,
  updateUserStatus,
  getAllUsers,
  editUser,
  updateGlobalWorkerName
};
