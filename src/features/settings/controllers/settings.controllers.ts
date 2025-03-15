import { asyncWrapper } from "../../../utils/asyncWrapper";
import getGlobalSettingsController from "./getGlobalSettings.controller";
import updateGlobalSettingsController from "./updateGlobalSettings.controller";

export default {
    getGlobalSettings: asyncWrapper(getGlobalSettingsController),
    updateGlobalSettings: asyncWrapper(updateGlobalSettingsController)
}