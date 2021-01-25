import express from 'express';
import { AppConfig } from "./config/main-config";

const app = express();

const appConfig: AppConfig = new AppConfig();

appConfig.init(app);

export default app;
