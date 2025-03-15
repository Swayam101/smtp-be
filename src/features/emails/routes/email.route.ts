import { Router } from "express";
import emailControllers from "../controllers/email.controllers";
import middlewares from "../../../middlewares";
import { ERoles } from "../../users/interfaces/user.interface";

const router = Router()

router.post("/", middlewares.checkRole(ERoles.USER), emailControllers.sendEmail)
router.get("/", middlewares.checkRole(ERoles.ADMIN, ERoles.OWNER), emailControllers.getAllEmails)
router.get("/my", middlewares.checkRole(ERoles.ADMIN, ERoles.OWNER), emailControllers.getMyEmails)
router.get("/:id", emailControllers.getEmailById)

export default router
