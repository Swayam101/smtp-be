import { object, string } from "yup";
import validateRequest from "../../../utils/validateRequest";

const valiation = object().shape({
    markup: string().required("email markup is required"),
    // feilds: string().required("label map (feilds) is required"),
    name: string().required("name markup is required"),
    // email: string().required("email  is required"),
    category: string().required("category is required")
})

export default validateRequest(valiation)