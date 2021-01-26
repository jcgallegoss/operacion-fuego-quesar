import { Request, Response, NextFunction} from 'express';

const validSateliteName = (req: Request, _res: Response, next: NextFunction) => {
  if (req.params.id === 'kenobi' || req.params.id === 'skywalker' || req.params.id === 'sato') next();
  else next('route');
};

export { validSateliteName };