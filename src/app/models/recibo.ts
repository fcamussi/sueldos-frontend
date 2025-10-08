import {Empleado} from './empleado';
import {Jornada} from './jornada';

export interface Recibo {
  id: number;
  empleado: Empleado;
  jornadas: Jornada[];
}
