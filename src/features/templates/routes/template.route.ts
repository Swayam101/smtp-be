import { Router } from "express";
import templatesControllers from "../controllers/templates.controllers";
import middlewares from "../../../middlewares";
import { ERoles } from "../../users/interfaces/user.interface";
import templateValidators from "../validators/template.validators";

const router = Router()

router.post("/", middlewares.checkRole(ERoles.ADMIN, ERoles.OWNER), templateValidators.createTemplate, templatesControllers.createTemplate)
router.get("/", templatesControllers.getAllTempaltes)
router.put("/status/:id", middlewares.checkRole(ERoles.ADMIN, ERoles.OWNER), templatesControllers.updateTemplateStatus)
router.put("/:id", middlewares.checkRole(ERoles.ADMIN, ERoles.OWNER), templatesControllers.editTemplate)
router.get("/:id", templatesControllers.getTemplateById)

export default router