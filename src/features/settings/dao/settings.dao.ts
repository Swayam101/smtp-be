import { ISettings } from "../interfaces/setting.interface"
import settingsModel from "../models/settings.model"

const createSettings = (setting: ISettings) => {
    return settingsModel.create(setting)
}

const getMySettings = (user: string) => {
    return settingsModel.findOne({ user })
}


const updateMySettings = (id: string, settings: ISettings) => {
    return settingsModel.findByIdAndUpdate(id, { $set: settings })
}

export default {
    createSettings,
    getMySettings,
    updateMySettings
}