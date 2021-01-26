import app from '../../app';
import request from 'supertest';
import { CONST_1, CONST_3, CONST_6} from "../constants";

describe('Satalites', () => {

  test('TEST 1: Prueba del servicio topsecret encontro coordenadas', async (done) => {
    request(app)
      .post('/api/topsecret')
      .send(CONST_1)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
          if (err) return done(err);
          return done();
      });
  });

  test('TEST 2: Prueba del servicio topsecret no encontro coordenadas', async (done) => {
    request(app)
      .post('/api/topsecret')
      .send(CONST_3)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(404)
      .end((err, res) => {
          if (err) return done(err);
          return done();
      });
  });

  test('TEST 3: No se pudo decifrar el mensje', async (done) => {
    request(app)
      .post('/api/topsecret')
      .send(CONST_6)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(404)
      .end((err, res) => {
          if (err) return done(err);
          return done();
      });
  });
});
