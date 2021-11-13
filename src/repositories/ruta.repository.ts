import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {Ruta, RutaRelations, Aeropuerto} from '../models';
import {AeropuertoRepository} from './aeropuerto.repository';

export class RutaRepository extends DefaultCrudRepository<
  Ruta,
  typeof Ruta.prototype.Id,
  RutaRelations
> {

  public readonly origenfk: BelongsToAccessor<Aeropuerto, typeof Ruta.prototype.Id>;

  public readonly destinofk: BelongsToAccessor<Aeropuerto, typeof Ruta.prototype.Id>;

  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource, @repository.getter('AeropuertoRepository') protected aeropuertoRepositoryGetter: Getter<AeropuertoRepository>,
  ) {
    super(Ruta, dataSource);
    this.destinofk = this.createBelongsToAccessorFor('destinofk', aeropuertoRepositoryGetter,);
    this.registerInclusionResolver('destinofk', this.destinofk.inclusionResolver);
    this.origenfk = this.createBelongsToAccessorFor('origenfk', aeropuertoRepositoryGetter,);
    this.registerInclusionResolver('origenfk', this.origenfk.inclusionResolver);
  }
}
