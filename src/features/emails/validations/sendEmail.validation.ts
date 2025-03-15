import { object, string } from "yup"
import validateRequest from "../../../utils/validateRequest"

const validaiton = object().shape({
    from: string().required("from email is required").email("invalid 'from' email detected"),
    to: string().required('to email is required').email("invalid 'to' email detected"),
    subject: string().required('subject is required'),
    html: string().required("html content is required"),
    workerName: string().required("worker name is required"),
    template: string().required("template id is required")
})

export default validateRequest(validaiton)