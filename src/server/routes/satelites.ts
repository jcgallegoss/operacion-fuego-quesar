import { Router } from 'express';
import { topsecretSOS } from '../controllers/satelites';

const satelites = Router();

satelites.post('/topsecret', topsecretSOS);

export default satelites;