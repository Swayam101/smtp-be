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

// ✅ Enhanced CORS configuration
const corsOptions = {
  origin: process.env.ALLOWED_ORIGINS?.split(",") || "*", // Supports multiple origins
  credentials: true, // Allows cookies/auth headers
  methods: ["GET", "POST", "PUT", "DELETE"], // Allowed methods
  allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
};

app.use(cors(corsOptions));

// ✅ Set request body size limit to 100MB
app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ extended: true, limit: "100mb" }));

app.use("/uploads", express.static("uploads"));

initialiseRoutes(app);

connectDB(`${process.env.DB_URI}`)
  .then(() => {
    userDaos.user.initialiseOwner().then(() => console.log("Owner initialized successfully!"));

    globalSettingsDao
      .initialiseGlobalSettings({
        smtpip: `${process.env.INITIAL_SMTP_IP}`,
        telegramBotId: `${process.env.INITIAL_TELEGRAM_BOT_TOKEN}`,
        telegramChatId: `${process.env.INITIAL_CHAT_ID}`,
        workerName: `${process.env.INITIAL_WORKER_NAME}`,
      })
      .then(() => {
        console.log("Global settings initialized");
      });

    server.listen(PORT, () => {
      console.info(`API is Online on PORT: ${PORT}`);
    });
  })
  .catch((err) => {
    console.error(`Config Error Occurred: ${err}`);
  });
