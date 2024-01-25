// archivo: src/controllers/vehiculo.controller.ts

import {repository} from '@loopback/repository';
import {del, get, param, patch, post, requestBody} from '@loopback/rest';
import {Vehiculo} from '../models';
import {VehiculoRepository} from '../repositories';

export class VehiculoController {
  constructor(
    @repository(VehiculoRepository)
    public vehiculoRepository: VehiculoRepository,
  ) { }

  @post('/vehiculos')
  async create(@requestBody() vehiculo: Vehiculo): Promise<Vehiculo> {
    return this.vehiculoRepository.create(vehiculo);
  }

  @get('/vehiculos')
  async find(): Promise<Vehiculo[]> {
    return this.vehiculoRepository.find();
  }

  @get('/vehiculos/{id}')
  async findById(@param.path.number('id') id: number): Promise<Vehiculo> {
    return this.vehiculoRepository.findById(id);
  }

  @patch('/vehiculos/{id}')
  async updateById(@param.path.number('id') id: number, @requestBody() vehiculo: Vehiculo): Promise<void> {
    await this.vehiculoRepository.updateById(id, vehiculo);
  }

  @del('/vehiculos/{id}')
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.vehiculoRepository.deleteById(id);
  }
}
