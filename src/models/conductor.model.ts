import {Entity, hasMany, model, property} from '@loopback/repository';
import {Pedido} from './pedidoB.model';
import {Vehiculo} from './vehiculoB.model';

@model()
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
    required: false,
    postgresql: {
      columnName: 'apellido',
      dataType: 'character varying',
      dataLength: 20,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  apellido: string;

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
    required: false,
    postgresql: {
      columnName: 'direccion',
      dataType: 'character varying',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  direccion: string;

  @property({
    type: 'date',
    required: false,
    defaultFn: 'now',
    postgresql: {
      columnName: 'created_at',
      dataType: 'timestamp with time zone',
      nullable: 'NO',
    },
  })
  createdAt: Date;

  @property({
    type: 'date',
    required: false,
    defaultFn: 'now',
    postgresql: {
      columnName: 'updated_at',
      dataType: 'timestamp with time zone',
      nullable: 'NO',
    },
  })
  updatedAt: Date;

  @property({
    type: 'string',
    required: false,
    default: 0,
    postgresql: {
      columnName: 'created_by',
      dataType: 'integer',
      dataLength: null,
      dataPrecision: 6,
      dataScale: 0,
      nullable: 'NO',
    },
  })
  createdBy: string;

  @property({
    type: 'string',
    required: false,
    default: 0,
    postgresql: {
      columnName: 'updated_by',
      dataType: 'integer',
      dataLength: null,
      dataPrecision: 6,
      dataScale: 0,
      nullable: 'NO',
    },
  })
  updatedBy: string;


  @hasMany(() => Pedido, {keyTo: 'conductorId'})
  pedidos: Pedido[];

  @hasMany(() => Vehiculo, {keyTo: 'conductorId'})
  vehiculos: Vehiculo[];


  constructor(data?: Partial<Conductor>) {
    super(data);
  }
}

export interface ConductorRelations {
  // describe navigational properties here
}

export type ConductorWithRelations = Conductor & ConductorRelations;
