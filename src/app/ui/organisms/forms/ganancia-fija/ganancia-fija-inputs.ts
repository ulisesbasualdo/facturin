import { IInputGananciaFija } from '../../../interfaces/i-input';

export const GANANCIA_FIJA_INPUTS: IInputGananciaFija[] = [
  {
    name: 'gananciaFija',
    label: 'Ganancia Fija',
    placeholder: 'Ingrese su ganancia fija mensual',
    value: 0,
    required: true,
    formControlName: 'gananciaFija',
  },
];
