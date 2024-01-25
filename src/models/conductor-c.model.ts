import {Entity, hasMany, model, property} from '@loopback/repository';
import {Pedido} from './pedidoB.model'; // Asegúrate de importar el modelo Pedido
import {Vehiculo} from './vehiculoB.model'; // Asegúrate de importar el modelo Vehiculo

@model({
  settings: {
    strict: true,
    idInjection: true,
    postgresql: {schema: 'public', table: 'Conductor'},
  },
})
export class Conductor extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
    postgresql: {
      columnName: 'id',
      dataType: 'integer',
      dataLength: null,
      dataPrecision: 6,
      dataScale: 0,
      nullable: 'NO',
    },
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
    postgresql: {
      columnName: 'identificacion',
      dataType: 'character varying',
      dataLength: 11,
      dataPrecision: null,
      dataScale: null,
      nullable: 'NO',
    },
  })
  identificacion: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'apellido',
      dataType: 'character varying',
      dataLength: 20,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  apellido?: string;

  @property({
    type: 'string',
    required: true,
    postgresql: {
      columnName: 'nombre',
      dataType: 'character varying',
      dataLength: 20,
      dataPrecision: null,
      dataScale: null,
      nullable: 'NO',
    },
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
    postgresql: {
      columnName: 'telefono',
      dataType: 'character varying',
      dataLength: 20,
      dataPrecision: null,
      dataScale: null,
      nullable: 'NO',
    },
  })
  telefono: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'direccion',
      dataType: 'character varying',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  direccion?: string;

  @hasMany(() => Pedido, {keyTo: 'conductorId'})
  pedidos: Pedido[];

  @hasMany(() => Vehiculo, {keyTo: 'conductorId'})
  vehiculos: Vehiculo[];

  constructor(data?: Partial<Conductor>) {
    super(data);
  }
}

export interface ConductorRelations {
  // Definir relaciones si es necesario
}

export type ConductorWithRelations = Conductor & ConductorRelations;
