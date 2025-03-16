import { Component, forwardRef, input, output } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'ui-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UiInputComponent),
      multi: true,
    },
  ],
  template: `
    @if (type() !== 'select') {
      <input
        [type]="type()"
        [name]="name()"
        [required]="required()"
        [formControl]="control()"
        [placeholder]="placeholder()"
      />
    } @else {
      <select [formControl]="control()" [name]="name()">
        @for (value of values(); track $index) {
          <option [value]="value">
            {{ value }}
          </option>
        }
      </select>
    }
  `,
  styles: `
    input {
      display: block;
      padding: 10px;
      border-radius: 5px;
      border: 1px solid #ffffff;
      background-color: transparent;
      color: #fff;
      &::placeholder {
        color: darken(#fff, 20%);
      }
    }
    .input {
      margin-bottom: 20px;
    }
  `,
})
export class UiInputComponent implements ControlValueAccessor {
  public searchTag = output<string>();

  public type = input<string>('');
  public values = input<string[]>([]);
  public name = input<string>('');
  public required = input<boolean>(false);
  public control = input<FormControl>(new FormControl<string | null>(null));
  public placeholder = input<string>('');

  protected onChange = (v: any) => v;
  protected onTouched = () => {};
  protected disabled!: boolean;

  writeValue(value: any) {
    if (value === null || value === undefined) {
      this.control().setValue(null);
    } else {
      this.control().setValue(value);
    }
    this.control().setValue(value ?? null, { emitEvent: false });
    this.control().markAsPristine();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    if (isDisabled) {
      this.control().disable();
    } else {
      this.control().enable();
    }

    this.disabled = isDisabled;
  }
}
