// archivo: src/models/vehiculo.model.ts

import {Entity, model, property} from '@loopback/repository';
import {ConductorWithRelations} from './conductor-c.model';

@model({
  settings: {
    strict: true,
    idInjection: true,
    postgresql: {schema: 'public', table: 'Vehiculo'},
  },
})
export class Vehiculo extends Entity {
  @property({
    type: 'number',
    id: true,
    // generated: true,
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

  // @belongsTo(() => Conductor)
  // conductor: Conductor;

  constructor(data?: Partial<Vehiculo>) {
    super(data);
  }
}

export interface VehiculoRelations {
  conductor?: ConductorWithRelations; // Agregado para reflejar la relación "Muchos a Uno"
}

export type VehiculoWithRelations = Vehiculo & VehiculoRelations;
