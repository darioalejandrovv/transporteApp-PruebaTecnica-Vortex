// archivo: src/controllers/asociacion.controller.ts

import {repository} from '@loopback/repository';
import {HttpErrors, get, param, patch} from '@loopback/rest';
import {Vehiculo} from '../models';
import {ConductorRepository, VehiculoRepository} from '../repositories';

export class AsociacionController {
  constructor(
    @repository(ConductorRepository)
    public conductorRepository: ConductorRepository,
    @repository(VehiculoRepository)
    public vehiculoRepository: VehiculoRepository,
  ) { }

  @get('/conductores/{id}/vehiculos-disponibles')
  async vehiculosDisponibles(@param.path.number('id') id: number): Promise<Vehiculo[]> {
    // Obtener el conductor
    const conductor = await this.conductorRepository.findById(id);
    // Obtener vehículos disponibles (no asignados a ningún conductor)
    return this.vehiculoRepository.find({
      where: {
        conductorId: {
          eq: null,
        },
      },
    });

  }

  @patch('/conductores/{idConductor}/asociar-vehiculo/{idVehiculo}')
  async asociarVehiculo(
    @param.path.number('idConductor') idConductor: number,
    @param.path.number('idVehiculo') idVehiculo: number,
  ): Promise<void> {
    // Verificar que el vehículo no esté asignado a otro conductor
    const vehiculo = await this.vehiculoRepository.findById(idVehiculo);
    if (vehiculo.conductorId !== null && vehiculo.conductorId !== undefined) {
      throw new HttpErrors.BadRequest('El vehículo ya está asignado a otro conductor');
    }
    // Asociar el vehículo al conductor
    vehiculo.conductorId = idConductor;
    return await this.vehiculoRepository.updateById(idVehiculo, vehiculo)
  }

  @patch('/conductores/{idConductor}/desasociar-vehiculo/{idVehiculo}')
  async desasociarVehiculo(
    @param.path.number('idConductor') idConductor: number,
    @param.path.number('idVehiculo') idVehiculo: number,
  ): Promise<void> {
    // Verificar que el vehículo no esté asignado a otro conductor
    const vehiculo = await this.vehiculoRepository.findById(idVehiculo);

    if (vehiculo.conductorId !== idConductor) {
      throw new HttpErrors.BadRequest('El vehículo no está asignado a este conductor');
    }

    if (vehiculo.conductorId === null && vehiculo.conductorId === undefined) {
      throw new HttpErrors.BadRequest('El vehículo no está asignado a ningun conductor');
    }
    // Asociar el vehículo al conductor
    return await this.vehiculoRepository.updateById(idVehiculo, {conductorId: null})
  }
}
