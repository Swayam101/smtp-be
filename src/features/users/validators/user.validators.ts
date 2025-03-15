import { boolean, object, string } from "yup";
import createUserValidation from "./createUser.validation";
import validateRequest from "../../../utils/validateRequest";

const updatePassword = object().shape({
  id: string().required("id is required"),
  password: string().required("password is required"),
});



export default {
  createUserValidation,
  updatePassword: validateRequest(updatePassword),
};
