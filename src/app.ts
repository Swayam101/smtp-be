import express, { Application } from "express";
import { config } from "dotenv";
import http, { Server } from "http";
import cors from "cors";
import connectDB from "./server/connectDB";
import initialiseRoutes from "./server/initialiseRoutes";
import globalSettingsDao from "./features/settings/dao/global-settings.dao";
import userDaos from "./features/users/dao/user.daos";

const PORT = process.env.PORT ?? 4000;
config();

const app: Application = express();
const server: Server = http.createServer(app);

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));

initialiseRoutes(app);

connectDB(`${process.env.DB_URI}`)
  .then(() => {

    userDaos.user.initialiseOwner().then(() => console.log("Owner initalised successfully!"))

    globalSettingsDao.initialiseGlobalSettings({
      smtpip: `${process.env.INITIAL_SMTP_IP}`,
      telegramBotId: `${process.env.INITIAL_TELEGRAM_BOT_TOKEN}`,
      telegramChatId: `${process.env.INITIAL_CHAT_ID}`,
      workerName: `${process.env.INITIAL_WORKER_NAME}`
    }).then(() => {
      console.log("global settings initialised");

    })

    server.listen(PORT, () => {
      console.info(`API is Online on PORT: ${PORT}`);
    });
  })
  .catch((err) => {
    console.error(`Config Error Occured: ${err}`);
  });
