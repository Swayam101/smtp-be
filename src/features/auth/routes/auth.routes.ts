import { Router } from "express";
import userAuthRoutes from "./user.auth.routes";

export default {
  userAuthRoutes,
} as { [key: string]: Router };
