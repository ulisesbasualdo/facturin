export interface IInput {
  name?: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  type?: string;
  values?: string[];
  formControlName: string;
}
