import axios from "axios";

export default async ({ botToken, chatId, message }: { message: string, botToken: string, chatId: string }) => {
    try {
        const telegramApiUrl = `${process.env.TELEGRAM_API_URL}${botToken}/sendMessage`;
        const response = await axios.post(telegramApiUrl, {
            chat_id: chatId,
            text: message,
        });
        console.log("telegram reposen  : ", response.data);

        return response.data
    } catch (error) {
        console.log("something error prone", error)
    }
}