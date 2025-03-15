import express, { RequestHandler } from "express";

import baseRouter from "../routes";
import auth from "../features/auth";
import { IFeature } from "../interface/globals.interface";
import users from "../features/users";
import templates from "../features/templates";
import emails from "../features/emails";
import checkUserAccessMiddleware from "../middlewares/checkUserAccess.middleware";
import settings from "../features/settings";

const registerFeatureRouters = (
  app: express.Application,
  feature: IFeature,
  endpoint: string,
  middlewares: RequestHandler[]
) => {
  Object.values(feature.routers).forEach((router) => {
    app.use(endpoint, middlewares, router);
  });
};

export default (app: express.Application) => {
  app.use(baseRouter);
  registerFeatureRouters(app, auth, "/auth", []);
  registerFeatureRouters(app, users, "/user", []);
  registerFeatureRouters(app, templates, "/template", [checkUserAccessMiddleware])
  registerFeatureRouters(app, emails, "/email", [checkUserAccessMiddleware])
  registerFeatureRouters(app, settings, "/settings", [checkUserAccessMiddleware])
};
