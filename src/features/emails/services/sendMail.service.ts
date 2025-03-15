import axios from "axios";
import globalSettingsDao from "../../settings/dao/global-settings.dao";

export type EmailData = {
    from: string;
    to: string;
    html: string;
    from_name: string;
    subject: string;
};

async function sendEmail(emailData: EmailData): Promise<void> {
    try {

        const smtpip = (await globalSettingsDao.getGlobalSettings()).smtpip

        await axios.post(smtpip, emailData, {
            headers: {
                "Content-Type": "application/json",
            },
        });

        console.log("Email sent successfully!");
    } catch (error) {
        console.error("Error sending email:", error);
        throw error;
    }
}

export default sendEmail;