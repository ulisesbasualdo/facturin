import { Component, input } from '@angular/core';

@Component({
  selector: 'ui-label',
  standalone: true,
  imports: [],
  template: ` <label>{{ labelTitle() }}</label> `,
  styles: `
    label {
      display: block;
    }

    label {
      color: #ffffff;
      font-size: 16px;
      margin-bottom: 0.5em;
    }
  `,
})
export class UiLabelComponent {
  labelTitle = input<string>('');
}
