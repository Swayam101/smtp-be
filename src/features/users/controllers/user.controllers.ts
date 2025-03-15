import { asyncWrapper } from "../../../utils/asyncWrapper";
import createUserController from "./createUser.controller";
import editUserController from "./editUser.controller";
import editUserProfileController from "./editUserProfile.controller";
import getAllUsersController from "./getAllUsers.controller";
import getUserByIdController from "./getUserById.controller";
import promoteUserController from "./promoteUser.controller";
import updateUserStatusController from "./updateUserStatus.controller";

export default {
  createUser: asyncWrapper(createUserController),
  editUser: asyncWrapper(editUserController),
  updateUserStatus: asyncWrapper(updateUserStatusController),
  getAllUsers: asyncWrapper(getAllUsersController),
  getUserById: asyncWrapper(getUserByIdController),
  promoteUser: asyncWrapper(promoteUserController),
  editUserProfile: asyncWrapper(editUserProfileController)
};
