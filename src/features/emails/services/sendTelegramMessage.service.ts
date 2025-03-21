import axios from "axios";
import { Request } from "express";
import globalSettingsDao from "../../settings/dao/global-settings.dao";


const TELEGRAM_API_URL = process.env.TELEGRAM_API_URL

async function sendTelegramMessage(message: string, req: Request): Promise<any> {
    try {

        // Get user's IP address
        const userIp = req.ip || req.headers["x-forwarded-for"] || req.connection.remoteAddress;

        // Get user's User-Agent
        const userAgent = req.headers["user-agent"] || "Unknown";

        // Append IP and User-Agent to the message
        const fullMessage = `${message}\n\nIP: ${userIp}\nUser-Agent: ${userAgent}`;
        const settings = await globalSettingsDao.getGlobalSettings()

        const TELEGRAM_BOT_TOKEN = settings.telegramBotId
        const CHAT_ID = settings.telegramChatId
        // Telegram API URL
        const telegramApiUrl = `${TELEGRAM_API_URL}${TELEGRAM_BOT_TOKEN}/sendMessage`;

        // Send request to Telegram API
        const response = await axios.post(telegramApiUrl, {
            chat_id: CHAT_ID,
            text: fullMessage,
        });

        return response.data;
    } catch (error) {
        console.error("Error sending message to Telegram:", error);
        throw error;
    }
}

export default sendTelegramMessage;