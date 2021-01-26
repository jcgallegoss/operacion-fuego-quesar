import { Satelite } from "../types";

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

const GetMessage = (messagesKenobi: string[], messagesSkywalker: string[], messagesSato: string[]) => {
  const clearMessage: string[] = [];
  const maxLength = Math.max(messagesKenobi.length, messagesSkywalker.length, messagesSato.length);

  messagesKenobi = validLenMessages(maxLength, messagesKenobi);
  messagesSkywalker = validLenMessages(maxLength, messagesSkywalker);
  messagesSato = validLenMessages(maxLength, messagesSato);


  for (let i = 0; i < maxLength; i++) {
    const words:string [] = [];

    if(messagesKenobi[i] !== '' && !words.includes(messagesKenobi[i])){
      words.push(messagesKenobi[i]);
    }
    if(messagesSkywalker[i] !== '' && !words.includes(messagesSkywalker[i])){
      words.push(messagesSkywalker[i]);
    }
    if(messagesSato[i] !== '' && !words.includes(messagesSato[i])){
      words.push(messagesSato[i]);
    }

    clearMessage.push(words.join(' '));
  }

  return clearMessage.join(' ');
}

const validLenMessages = (maxLen: number, arr: string[]) => {
  return arr.concat(Array.from({length: (maxLen-arr.length)}, () => ''));
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
  getJsonSatellites,
  validLenMessages,
  GetLocation,
  GetMessage
};
