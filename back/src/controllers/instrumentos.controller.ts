import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Instrumento} from '../models';
import {InstrumentoRepository} from '../repositories';

export class InstrumentosController {
  constructor(
    @repository(InstrumentoRepository)
    public instrumentoRepository : InstrumentoRepository,
  ) {}

  @post('/instrumentos')
  @response(200, {
    description: 'Instrumento model instance',
    content: {'application/json': {schema: getModelSchemaRef(Instrumento)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Instrumento, {
            title: 'NewInstrumento',
            exclude: ['instrumento_id'],
          }),
        },
      },
    })
    instrumento: Omit<Instrumento, 'instrumento_id'>,
  ): Promise<Instrumento> {
    return this.instrumentoRepository.create(instrumento);
  }

  @get('/instrumentos/count')
  @response(200, {
    description: 'Instrumento model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Instrumento) where?: Where<Instrumento>,
  ): Promise<Count> {
    return this.instrumentoRepository.count(where);
  }

  @get('/instrumentos')
  @response(200, {
    description: 'Array of Instrumento model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Instrumento, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Instrumento) filter?: Filter<Instrumento>,
  ): Promise<Instrumento[]> {
    return this.instrumentoRepository.find(filter);
  }

  @patch('/instrumentos')
  @response(200, {
    description: 'Instrumento PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Instrumento, {partial: true}),
        },
      },
    })
    instrumento: Instrumento,
    @param.where(Instrumento) where?: Where<Instrumento>,
  ): Promise<Count> {
    return this.instrumentoRepository.updateAll(instrumento, where);
  }

  @get('/instrumentos/{id}')
  @response(200, {
    description: 'Instrumento model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Instrumento, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Instrumento, {exclude: 'where'}) filter?: FilterExcludingWhere<Instrumento>
  ): Promise<Instrumento> {
    return this.instrumentoRepository.findById(id, filter);
  }

  @patch('/instrumentos/{id}')
  @response(204, {
    description: 'Instrumento PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Instrumento, {partial: true}),
        },
      },
    })
    instrumento: Instrumento,
  ): Promise<void> {
    await this.instrumentoRepository.updateById(id, instrumento);
  }

  @put('/instrumentos/{id}')
  @response(204, {
    description: 'Instrumento PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() instrumento: Instrumento,
  ): Promise<void> {
    await this.instrumentoRepository.replaceById(id, instrumento);
  }

  @del('/instrumentos/{id}')
  @response(204, {
    description: 'Instrumento DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.instrumentoRepository.deleteById(id);
  }
}
