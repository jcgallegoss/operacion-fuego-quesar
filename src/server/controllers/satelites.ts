import { Request, Response } from 'express';
import { Satelite } from '../types';

const topsecretSOS = (req: Request, res: Response) => {
  try {
    const satelites = getJsonSatellites(req.body.satellites);
    const position = GetLocation(satelites.kenobi.distance, satelites.skywalker.distance, satelites.sato.distance);

    if(!position.x || !position.y){
      throw Error ('No se pudo localizar')
    };

    res.status(200).send({
        "position": position,
        "message": ''
     });
  } catch (e) {
    res.status(404).send({status: 'ERROR', e: e.message});
  }
}

const GetLocation = (distanceKenobi: number, distanceSkywalker: number, distanceSato: number) => {
  const kenobi:number[] = [-500,-200];
  const skywalker:number[] = [100,-100];
  const sato:number[] = [500,100];

  const xa = kenobi[0];
  const ya = kenobi[1];

  const xb = skywalker[0];
  const yb = skywalker[1];

  const xc = sato[0];
  const yc = sato[1];

  const ra = distanceKenobi;
  const rb = distanceSkywalker;
  const rc = distanceSato;

  const S = (Math.pow(xc, 2.) - Math.pow(xb, 2.) + Math.pow(yc, 2.) - Math.pow(yb, 2.) + Math.pow(rb, 2.) - Math.pow(rc, 2.)) / 2.0;
  const T = (Math.pow(xa, 2.) - Math.pow(xb, 2.) + Math.pow(ya, 2.) - Math.pow(yb, 2.) + Math.pow(rb, 2.) - Math.pow(ra, 2.)) / 2.0;
  const y = ((T * (xb - xc)) - (S * (xb - xa))) / (((ya - yb) * (xb - xc)) - ((yc - yb) * (xb - xa)));
  const x = ((y * (ya - yb)) - T) / (xb - xa);

  return {
    x: Number(x.toFixed(2)),
    y: Number(y.toFixed(2))
  };
}

const getJsonSatellites = (satellites: any) => {
  const objSatelites: any = {};

  satellites.forEach((s: Satelite) => {
    objSatelites[s.name] = {
      distance: s.distance,
      message: s.message
    };
  });

  return objSatelites;
}

export { 
  topsecretSOS,
  getJsonSatellites,
  GetLocation
};
