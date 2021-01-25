import { getJsonSatellites, GetLocation, validLenMessages, GetMessage } from '../../controllers/satelites';
import { CONST_1, CONST_2, CONST_3, CONST_4, CONST_5, CONST_6} from "../constants";
import request from 'supertest';
import dotenv from "dotenv";
import app from '../../app';
dotenv.config();

describe('Satalites', () => {

  const port = process.env.PORT;
  app.listen(port);

  test('TEST 1: Se crea obj satelites', async () => {
    const response = getJsonSatellites(CONST_1.satellites);
    expect(response).toBeDefined();
  });

  test('TEST 2: Calcula coordenadas desde ditancias', async () => {
    const response = GetLocation(CONST_2.distanceKenobi, CONST_2.distanceSkywalker, CONST_2.distanceSato);
    expect(response).toBeDefined();
  });

  test('TEST 3: Prueba del servicio topsecret encontro coordenadas', async (done) => {
    request(app)
      .post('/api/topsecret')
      .send(CONST_1)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {
          if (err) return done(err);
          return done();
      });
  });

  test('TEST 4: Prueba del servicio topsecret no encontro coordenadas', async (done) => {
    request(app)
      .post('/api/topsecret')
      .send(CONST_3)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(404)
      .end(function(err, res) {
          if (err) return done(err);
          return done();
      });
  });

  test('TEST 5: Se prueba el llenado de vacios a array message', async () => {
    const response = validLenMessages(CONST_4.maxLen, CONST_4.arr);
    expect(response.length).toBe(CONST_4.maxLen);
  });

  test('TEST 6: Se prueba funcion que decifra el mensje', async () => {
    const response = GetMessage(CONST_5.messagesKenobi, CONST_5.messagesSkywalker, CONST_5.messagesSato);
    expect(response).toBe('este es un mensaje secreto');
  });

  test('TEST 7: No se pudo decifrar el mensje', async (done) => {
    request(app)
      .post('/api/topsecret')
      .send(CONST_6)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(404)
      .end(function(err, res) {
          if (err) return done(err);
          return done();
      });
  });

});