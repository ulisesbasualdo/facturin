import { Component, input } from '@angular/core';

@Component({
  selector: 'ui-submit-btn',
  standalone: true,
  imports: [],
  template: `
    <button class="btn-enviar" type="submit">
      {{ btnTitle() }}
    </button>
  `,
  styles: `
    button {
      padding: 10px 20px;
      border-radius: 5px;
      border: none;
      background-color: #0d6efd;
      color: #fff;
      font-weight: bold;
      cursor: pointer;
      &:hover {
        background-color: lighten(#0d6efd, 10%);
      }
      &:disabled {
        background-color: desaturate(#0d6efd, 80%);
        color: #fff;
        pointer-events: none;
      }
    }
  `,
})
export class UiSubmitBtnComponent {
  btnTitle = input<string>('');
}
