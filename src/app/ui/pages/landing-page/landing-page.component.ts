import { Component } from '@angular/core';
import { UIPageLayoutComponent } from '../../layouts/page-layout/page-layout.component';
import { UIGananciaFijaForm } from '../../organisms/forms/ganancia-fija/ganancia-fija.component';
import { FormService } from '../../utils/form.service';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [UIPageLayoutComponent, UIGananciaFijaForm],
  template: `
    <ui-page-layout
      pageTitle="Ingrese su ganancia Fija"
    >
      <ui-ganancia-fija-form
      (formularioEnviado)=""
      />
    </ui-page-layout>
  `,
})
export class LandingPageComponent {
  constructor(private readonly formService: FormService) {}

}
