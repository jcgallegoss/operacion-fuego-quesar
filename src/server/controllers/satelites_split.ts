import { Request, Response } from 'express';
import { getModelForClass, mongoose } from "@typegoose/typegoose";
import { SatelitesModel } from "../models/satelites.model";
import { getJsonSatellites, GetLocation, GetMessage } from '../utils/sosFunctions';
import { MongoConnection } from '../config/db-config';

const satelitesModel = getModelForClass(SatelitesModel);
mongoose.set('useFindAndModify', false);
const db: MongoConnection = new MongoConnection();

const topsecretSOS_split = async (req: Request, res: Response) => {
  try {

    await db.connectToMongo();

    if(req.method === 'POST'){
      const sateliteReq = await satelitesModel.findOneAndUpdate(
        {'name': req.params.id},
        {'distance': req.body.distance, 'message': req.body.message}
      );

      if(!sateliteReq){
        await satelitesModel.create({
          'name': req.params.id,
          'distance': req.body.distance,
          'message': req.body.message,
          'opc_eliminar': true
        });
      }
    }

    const dbSatelites = await satelitesModel.find({});

    if(dbSatelites.length !== 3){
      throw Error ('no hay suficiente información');
    }

    const objSatelites = getJsonSatellites(dbSatelites);
    const position = GetLocation(objSatelites.kenobi.distance, objSatelites.skywalker.distance, objSatelites.sato.distance);
    const message = GetMessage(objSatelites.kenobi.message, objSatelites.skywalker.message, objSatelites.sato.message);

    await db.closeMongo();

    res.status(200).send({
      "position": position,
      "message": message
    });
  } catch (e) {
    res.status(404).send({status: 'ERROR', e: e.message});
  }
}

export {
  topsecretSOS_split
};
