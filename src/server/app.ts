import express from 'express';
import { AppConfig } from "./config/main-config";
import { RouteConfig } from './config/route-config';

const app = express();

const appConfig: AppConfig = new AppConfig();
const routeConfig: RouteConfig = new RouteConfig();

appConfig.init(app);
routeConfig.init(app);

export default app;
