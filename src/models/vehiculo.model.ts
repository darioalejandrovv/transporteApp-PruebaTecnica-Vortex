import {Entity, model, property} from '@loopback/repository';

@model()
export class Vehiculo extends Entity {
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
      columnName: 'modelo',
      dataType: 'character varying',
      dataLength: 4,
      dataPrecision: null,
      dataScale: null,
      nullable: 'NO',
    },
  })
  modelo: string;

  @property({
    type: 'string',
    required: true,
    postgresql: {
      columnName: 'placa',
      dataType: 'character varying',
      dataLength: 7,
      dataPrecision: null,
      dataScale: null,
      nullable: 'NO',
      unique: true,
    },
  })
  placa: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'capacidad',
      dataType: 'character varying',
      dataLength: 7,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES', // Permitir valores nulos
    },
  })
  capacidad?: string;

  @property({
    type: 'number',
    required: false,
    postgresql: {
      columnName: 'conductor_id',
      dataType: 'integer',
      dataLength: 6,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES', // Permitir valores nulos
      foreignKey: {
        name: 'fk_vehiculo_conductor', // Nombre de la llave foránea
        table: 'Conductor',
        mapping: 'id',
      },
    },
  })
  conductorId: number | null; // Permitir valores nulos



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




  // @belongsTo(() => Conductor)
  // conductor: Conductor;


  constructor(data?: Partial<Vehiculo>) {
    super(data);
  }
}

export interface VehiculoRelations {
  // describe navigational properties here
}

export type VehiculoWithRelations = Vehiculo & VehiculoRelations;
