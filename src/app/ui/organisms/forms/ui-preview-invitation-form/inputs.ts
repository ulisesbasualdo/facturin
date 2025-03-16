import { IInput } from "../../../interfaces/i-input";

export const PREVIEW_FORM_INPUTS: IInput[] = [
  {
    name: 'tipoEvento',
    label: 'Tipo de evento',
    placeholder: 'Ingrese el tipo de evento',
    values: ['birthday', 'wedding', 'baby-shower'],
    required: true,
    type: 'select',
    formControlName: 'tipoEvento',
  },
    {
      name: 'nombre',
      label: 'Nombre',
      placeholder: 'Ingrese su nombre',
      required: true,
      type: 'text',
      formControlName: 'nombre',
    },
    {
      name: 'edadQueCumple',
      label: 'Edad que cumple',
      placeholder: 'Ingrese la edad que cumple',
      required: true,
      type: 'number',
      formControlName: 'edadQueCumple',
    },
    {
      name: 'fechaEvento',
      label: 'Fecha del evento',
      placeholder: 'Ingrese la fecha del evento',
      required: true,
      type: 'date',
      formControlName: 'fechaEvento',
    },
  ];
