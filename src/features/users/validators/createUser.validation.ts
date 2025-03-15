import { object, string } from "yup";
import validateRequest from "../../../utils/validateRequest";
import { ERoles } from "../interfaces/user.interface";

const validation = object({
  username: string()
    .required("Username is required")
    .min(3, "Username must be at least 3 characters long"),
  password: string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters long"),
  role:string().required("role is required").oneOf(Object.values(ERoles),"invalid role"),
});

export default validateRequest(validation);
