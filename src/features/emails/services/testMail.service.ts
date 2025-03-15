import axios from "axios";

export default async (smtpip: string, { from, html, to, subject }: { html: string, to: string, from: string, subject: string }) => {

    const payload = {
        from, to, html, subject
    }
    const response = await axios.post(smtpip, payload, {
        headers: {
            "Content-Type": "application/json",
        },
    });
    return response
}