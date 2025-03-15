import { Router } from "express";
import settingsControllers from "../controllers/settings.controllers";

const router = Router()


router.put("/global", settingsControllers.updateGlobalSettings)
router.get("/global", settingsControllers.getGlobalSettings)
router.post("/global/test/smtp", settingsControllers.testSMTP)
router.post("/global/test/telegram", settingsControllers.testTelegram)

export default router