import { asyncWrapper } from "../../../utils/asyncWrapper";
import getGlobalSettingsController from "./getGlobalSettings.controller";
import testSMTPController from "./testSMTP.controller";
import updateGlobalSettingsController from "./updateGlobalSettings.controller";

export default {
    getGlobalSettings: asyncWrapper(getGlobalSettingsController),
    updateGlobalSettings: asyncWrapper(updateGlobalSettingsController),
    testSMTP: asyncWrapper(testSMTPController)
}