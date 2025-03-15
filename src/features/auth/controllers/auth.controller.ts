import { asyncWrapper } from "../../../utils/asyncWrapper";
import getUserProfileController from "./getUserProfile.controller";
import userLoginController from "./userLogin.controller";

export default {
  userLogin: asyncWrapper(userLoginController),
  getUserProfile: asyncWrapper(getUserProfileController),
};
