import axios from "axios";

type EmailData = {
    from: string;
    to: string;
    worker: string;
    caseid: string;
    html: string;
    from_name: string;
    subject: string;
};

async function sendEmail(emailData: EmailData): Promise<void> {
    try {
        // Validate required fields
        const { from, to, worker, caseid, from_name, subject, html } = emailData;
        if (!from || !to || !worker || !caseid || !from_name || !subject || !html) {
            throw new Error("Please fill in all required fields: Sending From, Sending To, Worker Name, and Case ID.");
        }



        const smtpip = "http://ip:port/send_email"

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