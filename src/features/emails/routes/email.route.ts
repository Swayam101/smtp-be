import { Router } from "express";
import emailControllers from "../controllers/email.controllers";
import middlewares from "../../../middlewares";
import { ERoles } from "../../users/interfaces/user.interface";
import emailsValidations from "../validations/emails.validations";

const router = Router()

router.post("/", middlewares.checkRole(ERoles.USER,ERoles.ADMIN, ERoles.OWNER), emailsValidations.sendEmail, emailControllers.sendEmail)
router.get("/", middlewares.checkRole(ERoles.ADMIN, ERoles.OWNER), emailControllers.getAllEmails)
router.get("/my", middlewares.checkRole(ERoles.ADMIN, ERoles.OWNER, ERoles.USER), emailControllers.getMyEmails)
router.get("/:id", emailControllers.getEmailById)

export default router
