import {Getter, inject} from '@loopback/core';
import {DefaultCrudRepository, HasManyRepositoryFactory, repository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Conductor, ConductorRelations, Vehiculo} from '../models';
import {VehiculoRepository} from './vehiculo.repository';

export class ConductorRepository extends DefaultCrudRepository<
  Conductor,
  typeof Conductor.prototype.id,
  ConductorRelations
> {
  public readonly vehiculos: HasManyRepositoryFactory<Vehiculo, typeof Conductor.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
    @repository.getter('VehiculoRepository') getVehiculoRepository: Getter<VehiculoRepository>,
  ) {
    super(Conductor, dataSource);

    // Establecer la relación uno a muchos entre Conductor y Vehiculo
    this.vehiculos = this.createHasManyRepositoryFactoryFor('vehiculos', getVehiculoRepository);
    this.registerInclusionResolver('vehiculos', this.vehiculos.inclusionResolver);
  }
}
