import express, { NextFunction } from 'express';
import bodyParser from 'body-parser';

export class AppConfig {

  public init = (app: any) => {
    app.use(this.allowCrossDomain);
    app.use(express.static('public'));
    app.use(bodyParser.json({limit: '1024mb'}));
    app.use(bodyParser.urlencoded({limit: '1024mb', extended: true}));
  }

  private allowCrossDomain = (req: any, res: any, next: NextFunction) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  };

}
