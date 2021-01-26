import { prop, modelOptions } from '@typegoose/typegoose';

@modelOptions({ schemaOptions: { collection: 'satelites' } })
export class SatelitesModel {
    /** Id de mongo */
    _id: string;
    
    /** Nombre del satelite */
    @prop({ required: true })
    name: string;

    /** Distancia entre nave - satelite */
    @prop({ required: true })
    distance: number;

    /** Mensajes de la nave */
    @prop({ required: true })
    message: string[];

    /** Bandera para limpiar */
    @prop({ required: true })
    opc_eliminar: boolean;
}
