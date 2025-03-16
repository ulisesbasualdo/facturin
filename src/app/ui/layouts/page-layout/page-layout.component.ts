import { Component, input } from '@angular/core';

@Component({
  selector: 'ui-page-layout',
  standalone: true,
  imports: [],
  template: `<section>
    <div class="container">
      <div>
        <ng-content></ng-content>
      </div>
    </div>
  </section>`,
  styles: `
    section {
      padding: 20px;
      border-radius: 10px;
      background-color: #195fac;
      color: #ffffff;
      height: 100%;
      min-height: 100vh;
      display: flex;
      align-items: center;
    }

    .container {
      max-width: 800px;
      margin: 0 auto;
    }
  `,
})
export class UIPageLayoutComponent {
  pageTitle = input<string>('');
  pageDescription = input<string>('');
}
