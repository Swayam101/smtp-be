import userDaos from "../../users/dao/user.daos"
import { IGlobSettings } from "../interfaces/setting.interface"
import adminSettingsModel from "../models/adminSettings.model"

const getGlobalSettings = async () => {
    const settings = await adminSettingsModel.find({})
    return settings[0]
}

const updateGlobalSettings = async (update: Partial<IGlobSettings>) => {
    const settings = await adminSettingsModel.find({})
    const setting = settings[0]
    return adminSettingsModel.findByIdAndUpdate(setting._id, { $set: update })
}

const initialiseGlobalSettings = async (globalSettings: IGlobSettings) => {
    try {
        const existingSettings = await adminSettingsModel.findOne({});
        if (!existingSettings) {
            await adminSettingsModel.create(globalSettings);
            await userDaos.user.updateGlobalWorkerName(globalSettings.workerName)
            console.log('Global settings initialized with default values.');
        } else {
            console.log('Global settings already exist.');
        }
    } catch (error) {
        throw new Error('Error initializing global settings:');
    }
}


export default {
    getGlobalSettings,
    updateGlobalSettings,
    initialiseGlobalSettings
}