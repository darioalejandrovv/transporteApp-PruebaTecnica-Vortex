// archivo: src/controllers/conductor.controller.ts

import {repository} from '@loopback/repository';
import {del, get, param, patch, post, requestBody} from '@loopback/rest';
import {Conductor} from '../models';
import {ConductorRepository} from '../repositories';

export class ConductorController {
  constructor(
    @repository(ConductorRepository)
    public conductorRepository: ConductorRepository,
  ) { }

  @post('/conductores')
  async create(@requestBody() conductor: Conductor): Promise<Conductor> {
    return this.conductorRepository.create(conductor);
  }

  @get('/conductores')
  async find(): Promise<Conductor[]> {
    return this.conductorRepository.find();
  }

  @get('/conductores/{id}')
  async findById(@param.path.number('id') id: number): Promise<Conductor> {
    // return this.conductorRepository.findById(id);

    const conductor = await this.conductorRepository.findById(id, {include: ['vehiculos']});
    return conductor;
  }

  @patch('/conductores/{id}')
  async updateById(@param.path.number('id') id: number, @requestBody() conductor: Conductor): Promise<void> {
    await this.conductorRepository.updateById(id, conductor);
  }

  @del('/conductores/{id}')
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.conductorRepository.deleteById(id);
  }
}
