
import { getJsonSatellites, GetLocation, GetMessage, validLenMessages } from '../../utils/sosFunctions';
import { CONST_1, CONST_2, CONST_4, CONST_5} from "../constants";

describe('SOS Functions', () => {

  test('TEST 1: Se crea obj satelites.', async () => {
    const response = getJsonSatellites(CONST_1.satellites);
    expect(response).toBeDefined();
  });

  test('TEST 2: Calcula coordenadas desde ditancias', async () => {
    const response = GetLocation(CONST_2.distanceKenobi, CONST_2.distanceSkywalker, CONST_2.distanceSato);
    expect(response).toBeDefined();
  });

  test('TEST 3: Se prueba el llenado de vacios a array message', async () => {
    const response = validLenMessages(CONST_4.maxLen, CONST_4.arr);
    expect(response.length).toBe(CONST_4.maxLen);
  });

  test('TEST 4: Se prueba el llenado de vacios a array message', async () => {
    const response = validLenMessages(CONST_4.maxLen, CONST_4.arr);
    expect(response.length).toBe(CONST_4.maxLen);
  });

  test('TEST 5: Se prueba funcion que decifra el mensje', async () => {
    const response = GetMessage(CONST_5.messagesKenobi, CONST_5.messagesSkywalker, CONST_5.messagesSato);
    expect(response).toBe('este es un mensaje secreto');
  });

});
