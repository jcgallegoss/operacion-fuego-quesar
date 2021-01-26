import { Request, Response } from 'express';
import { getJsonSatellites, GetLocation, GetMessage } from '../utils/sosFunctions';

const topsecretSOS = (req: Request, res: Response) => {
  try {
    const satelites = getJsonSatellites(req.body.satellites);
    const position = GetLocation(satelites.kenobi.distance, satelites.skywalker.distance, satelites.sato.distance);
    const message = GetMessage(satelites.kenobi.message, satelites.skywalker.message, satelites.sato.message);

    if(!position.x || !position.y){
      throw Error ('No se pudo localizar');
    };

    if(!message || message === ''){
      throw Error ('No se pudo decifrar el mensaje');
    };

    res.status(200).send({
      "position": position,
      "message": message
    });
  } catch (e) {
    res.status(404).send({status: 'ERROR', e: e.message});
  }
}

export { topsecretSOS };
