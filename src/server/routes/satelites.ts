import { Router } from 'express';
import { topsecretSOS } from '../controllers/satelites';
import { topsecretSOS_split } from '../controllers/satelites_split';
import { validSateliteName } from '../middlewares/validURI';


const satelites = Router();

satelites.post('/topsecret', topsecretSOS);
satelites.route('/topsecret_split/:id')
  .get(validSateliteName, topsecretSOS_split)
  .post(validSateliteName, topsecretSOS_split);

export default satelites;