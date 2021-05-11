import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {InstrumentoPostgreSqlDataSource} from '../datasources';
import {Instrumento, InstrumentoRelations} from '../models';

export class InstrumentoRepository extends DefaultCrudRepository<
  Instrumento,
  typeof Instrumento.prototype.instrumento_id,
  InstrumentoRelations
> {
  constructor(
    @inject('datasources.instrumentoPostgreSQL') dataSource: InstrumentoPostgreSqlDataSource,
  ) {
    super(Instrumento, dataSource);
  }
}
