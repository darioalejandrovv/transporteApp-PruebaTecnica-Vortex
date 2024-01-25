import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    strict: true,
    idInjection: true,
    postgresql: {schema: 'public', table: 'Pedido'},
  },
})
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

  // @belongsTo(() => Conductor)
  // conductor: Conductor;

  constructor(data?: Partial<Pedido>) {
    super(data);
  }
}

export interface PedidoRelations {
  // Definir relaciones si es necesario
}

export type PedidoWithRelations = Pedido & PedidoRelations;
