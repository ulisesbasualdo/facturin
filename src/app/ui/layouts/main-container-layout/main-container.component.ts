import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ui-main-container-layout',
  standalone: true,
  imports: [],
  template: `
    <div class="container">
      <ng-content />
    </div>
  `,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'background',
  },
  styles: `
    .background {
      min-height: 100vh;
      background-color: #ff0;
      display: flex;
      justify-content: center;
    }
    .container {
      text-align: center;
      border: 3px solid red;
      width: 80%;
      margin: 5%;
      padding: 15%;
      color: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      overflow: hidden;

      -webkit-backdrop-filter: brightness(0.2) blur(4px);
      backdrop-filter: brightness(0.2) blur(4px);
      gap: 1em 0em;
      background-image: linear-gradient(to right, #6a11cb2e 0%, #2575fc2e 100%);
    }
  `,
})
export class UiMainContainerLayoutComponent {}
