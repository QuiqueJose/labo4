import {Entity, model, property} from '@loopback/repository';

@model()
export class Instrumento extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  instrumento_id?: number;

  @property({
    type: 'string',
    required: true,
  })
  instrumento_instrumento: string;

  @property({
    type: 'string',
    required: true,
  })
  instrumento_marca: string;

  @property({
    type: 'string',
    required: true,
  })
  instrumento_imagen: string;

  @property({
    type: 'number',
    required: true,
  })
  instrumento_precio: number;

  @property({
    type: 'number',
    required: true,
  })
  instrumento_costoEnvio?: number;

  @property({
    type: 'number',
    required: true,
  })
  instrumento_cantidad: number;

  @property({
    type: 'boolean',
    required: true,
  })
  instrumento_vendido: boolean;

  @property({
    type: 'string',
    required: true,
  })
  instrumento_descripcion: string;


  constructor(data?: Partial<Instrumento>) {
    super(data);
  }
}

export interface InstrumentoRelations {
  // describe navigational properties here
}

export type InstrumentoWithRelations = Instrumento & InstrumentoRelations;
