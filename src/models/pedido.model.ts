import {Entity, model, property} from '@loopback/repository';

@model()
export class Pedido extends Entity {
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
    postgresql: {
      columnName: 'tipo_pedido',
      dataType: 'character varying',
      dataLength: 20,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  tipoPedido?: string;

  @property({
    type: 'string',
    required: true,
    postgresql: {
      columnName: 'direccion',
      dataType: 'character varying',
      dataLength: 50,
      dataPrecision: null,
      dataScale: null,
      nullable: 'NO',
    },
  })
  direccion: string;

  @property({
    type: 'number',
    required: true,
    postgresql: {
      columnName: 'conductor_id',
      dataType: 'integer',
      dataLength: 6,
      dataPrecision: null,
      dataScale: null,
      nullable: 'NO',
      foreignKey: {
        name: 'fk_pedido_conductor', // Nombre de la llave foránea
        table: 'Conductor',
        mapping: 'id',
      },
    },
  })
  conductorId: number;


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



  constructor(data?: Partial<Pedido>) {
    super(data);
  }
}

export interface PedidoRelations {
  // describe navigational properties here
}

export type PedidoWithRelations = Pedido & PedidoRelations;
