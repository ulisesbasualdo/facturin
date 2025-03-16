import { AfterContentInit, ChangeDetectorRef, Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
  FormControl,
} from '@angular/forms';
import { UiInputComponent } from '../../../01-atoms/ui-input/ui-input.component';
import { UiLabelComponent } from '../../../01-atoms/ui-label/ui-label.component';
import { FormService } from '../../../utils/form.service';
import { UiSubmitBtnComponent } from '../../../01-atoms/ui-submit-btn/ui-submit-btn.component';
import { PREVIEW_FORM_INPUTS } from './inputs';
import { IInput } from '../../../interfaces/i-input';
import { IPreview } from '../../../interfaces/i-preview';

@Component({
  selector: 'ui-preview-invitation-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    UiLabelComponent,
    UiInputComponent,
    UiSubmitBtnComponent
  ],
  template: `
    <form [formGroup]="previewInvitationForm" (ngSubmit)="onSubmit()">
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
export class UiPreviewInvitationFormComponent implements AfterContentInit {
  protected inputs: IInput[] = PREVIEW_FORM_INPUTS;
  previewInvitationForm!: FormGroup;

  constructor(
    private readonly formService: FormService,
    private readonly fb: FormBuilder,
    private readonly cdr: ChangeDetectorRef
  ) {}

  ngAfterContentInit(): void {
    this.previewInvitationForm = this.fb.group({});
    this.inputs.forEach((input) => {
      this.previewInvitationForm.addControl(
        input.formControlName,
        new FormControl(''),
        { emitEvent: false }
      );
    });
    this.cdr.detectChanges();
  }

  onSubmit() {
    if (this.previewInvitationForm.valid) {
      const preview: IPreview = this.previewInvitationForm.value;
      console.log(preview);
      this.formService.createPreview(preview);
    }
  }

  getFormControl(name: string): FormControl {
    return this.previewInvitationForm.get(name) as FormControl;
  }
}
