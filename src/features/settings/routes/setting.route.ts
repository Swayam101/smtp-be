import { Router } from "express";
import settingsControllers from "../controllers/settings.controllers";

const router = Router()


router.put("/global", settingsControllers.updateGlobalSettings)
router.get("/global", settingsControllers.getGlobalSettings)

export default router