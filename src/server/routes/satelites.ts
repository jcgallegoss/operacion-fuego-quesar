import { Router } from 'express';

const satelites = Router();

satelites.post('/topsecret', (req: any, res: any)=>{
    res.status(200).send('Saludos, meter logica de endpoint topsecret');
});

export default satelites;