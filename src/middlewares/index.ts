
import checkRolesMiddleware from "./checkRoles.middleware";
import checkUserAccessMiddleware from "./checkUserAccess.middleware";

export default {
  checkUserAccess: checkUserAccessMiddleware,
  checkRole:checkRolesMiddleware
};
