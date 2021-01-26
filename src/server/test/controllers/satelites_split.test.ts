import app from '../../app';
import request from 'supertest';

describe('Satelites Split', () => {

  test('TEST 1: Regresa coordenadas y posicion', async () => {
   request(app)
      .get('/api/topsecret_split/sato')
      .set('Accept', 'application/json')
      .expect(200);
  });

  test('TEST 2: No regresa posicion y cordenadas', async () => {
    request(app)
      .get('/api/topsecret_split/otro')
      .set('Accept', 'application/json')
      .expect(404);
  });

  test('TEST 3: Prueba uri correcta', async () => {
    request(app)
      .get('/api/topsecret_split/skywalker')
      .set('Accept', 'application/json')
      .expect(404);
  });

  test('TEST 4: Prueba uri incorrecta', async () => {
    request(app)
      .get('/api/topsecret_split/otro')
      .set('Accept', 'application/json')
      .expect(404);
  });

});
