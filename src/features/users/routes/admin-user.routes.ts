import { Router } from "express";
import userControllers from "../controllers/user.controllers";
import userValidators from "../validators/user.validators";
import middlewares from "../../../middlewares";
import { ERoles } from "../interfaces/user.interface";

const adminUserRouter = Router();

adminUserRouter.post(
  "/",
  middlewares.checkUserAccess,
  middlewares.checkRole(ERoles.ADMIN, ERoles.OWNER),
  userValidators.createUserValidation,
  userControllers.createUser
);

adminUserRouter.get(
  "/all",
  middlewares.checkUserAccess,
  middlewares.checkRole(ERoles.ADMIN, ERoles.OWNER),
  userControllers.getAllUsers
);

adminUserRouter.put(
  "/profile/my",
  middlewares.checkUserAccess,
  userControllers.editUserProfile
)

adminUserRouter.put(
  "/promote/:id",
  middlewares.checkUserAccess,
  middlewares.checkRole(ERoles.OWNER),
  userControllers.promoteUser
)
adminUserRouter.put(
  "/status/:id",
  middlewares.checkUserAccess,
  middlewares.checkRole(ERoles.ADMIN, ERoles.OWNER),
  userControllers.updateUserStatus
);

adminUserRouter.put(
  "/:id",
  middlewares.checkUserAccess,
  middlewares.checkRole(ERoles.ADMIN, ERoles.OWNER),
  userControllers.editUser
);

adminUserRouter.get(
  "/:id",
  middlewares.checkUserAccess,
  middlewares.checkRole(ERoles.ADMIN, ERoles.OWNER),
  userControllers.getUserById
);


export default adminUserRouter;
