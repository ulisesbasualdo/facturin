import { AfterContentInit, ChangeDetectorRef, Component, EventEmitter, output } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
  FormControl,
} from '@angular/forms';
import { FormService } from '../../../utils/form.service';
import { GANANCIA_FIJA_INPUTS } from './ganancia-fija-inputs';
import { IPreview } from '../../../interfaces/i-preview';
import { UiInputComponent } from '../../../atoms/input/ui-input.component';
import { UiLabelComponent } from '../../../atoms/label/ui-label.component';
import { UiSubmitBtnComponent } from '../../../atoms/submit-btn/ui-submit-btn.component';
import { IInputGananciaFija } from '../../../interfaces/i-input';

@Component({
  selector: 'ui-ganancia-fija-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    UiLabelComponent,
    UiInputComponent,
    UiSubmitBtnComponent
  ],
  template: `
    <form [formGroup]="gananciaFijaForm" (ngSubmit)="onSubmit()">
      @for (input of inputs; track input) {
        <div class="input">
          <ui-label [labelTitle]="input.label!"></ui-label>
          <ui-input
            [type]="input.type!"
            [values]="input.values!"
            [name]="input.name!"
            [required]="input.required!"
            [placeholder]="input.placeholder!"
            [control]="getFormControl(input.formControlName)!"
            formControlName="{{ input.formControlName }}"
          />
        </div>
      }
      <div class="submit">
        <ui-submit-btn btnTitle="previsualizar" />
      </div>
    </form>
  `,
  styles: ``,
})
export class UIGananciaFijaForm implements AfterContentInit {
  formularioEnviado = output<boolean>();

  protected inputs: IInputGananciaFija[] = GANANCIA_FIJA_INPUTS;
  gananciaFijaForm!: FormGroup;

  constructor(
    private readonly formService: FormService,
    private readonly fb: FormBuilder,
    private readonly cdr: ChangeDetectorRef
  ) {}

  ngAfterContentInit(): void {
    this.gananciaFijaForm = this.fb.group({});
    this.inputs.forEach((input) => {
      this.gananciaFijaForm.addControl(
        input.formControlName,
        new FormControl(''),
        { emitEvent: false }
      );
    });
    this.cdr.detectChanges();
  }

  onSubmit() {
    if (this.gananciaFijaForm.valid) {
      this.formularioEnviado.emit(true);
    }
  }

  getFormControl(name: string): FormControl {
    return this.gananciaFijaForm.get(name) as FormControl;
  }
}
