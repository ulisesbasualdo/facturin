import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe, registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { IPreview } from '../interfaces/i-preview';

const datePipe = new DatePipe('es-AR');

@Injectable({
  providedIn: 'root',
})
export class FormService {
  constructor(private readonly router: Router) {}

  agregarGananciaFija(number: Number): void {
    this.navigateTo(preview.tipoEvento);
  }

  navigateTo(): void {
    this.router.navigateByUrl('/carga-productos');
  }
}
