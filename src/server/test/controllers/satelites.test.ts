import { getJsonSatellites, GetLocation } from '../../controllers/satelites';
import { CASO_1, CASO_2, CASO_3 } from "../constants";
import request from 'supertest';
import dotenv from "dotenv";
import app from '../../app';
dotenv.config();

describe('Satalites', () => {

  const port = process.env.PORT;
  const server = app.listen(port);

  test('PRUEBA 1: Se crea obj satelites', async () => {
    const response = getJsonSatellites(CASO_1.satellites);
    expect(response).toBeDefined();
  });

  test('PRUEBA 2: Calcula coordenadas desde ditancias', async () => {
    const response = GetLocation(CASO_2.distanceKenobi, CASO_2.distanceSkywalker, CASO_2.distanceSato);
    expect(response).toBeDefined();
  });

  test('PRUEBA 3: Prueba del servicio topsecret encontro coordenadas', async (done) => {
    request(app)
      .post('/api/topsecret')
      .send(CASO_1)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {
          if (err) return done(err);
          return done();
      });
  });

  test('PRUEBA 4: Prueba del servicio topsecret no encontro coordenadas', async (done) => {
    request(app)
      .post('/api/topsecret')
      .send(CASO_3)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(404)
      .end(function(err, res) {
          if (err) return done(err);
          return done();
      });
  });
});