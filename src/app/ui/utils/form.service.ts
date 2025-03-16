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

  constructor(
    private readonly router: Router
  ){}

  createPreview(preview: IPreview): void {
    console.log({pre: preview});
    registerLocaleData(localeEs);
    const fechaEvento = new Date(preview.fechaEvento);
    const dateFormat = datePipe.transform(fechaEvento, 'MMM d, y HH:mm:ss');
    const fechaHTML = datePipe.transform(fechaEvento, 'EEEE d \'de\' MMMM \'de\' y');
    if (dateFormat != null && fechaHTML != null){

      localStorage.setItem('anfitrion', JSON.stringify({
        id: 1,
        nya: preview.nombre,
        edad: preview.edad,
        tipo_evento: preview.tipoEvento,
        subtitulo_evento:  "sus " + preview.edad + " años",
        mapa_iframe: "0",
        date_format: dateFormat,
        fecha_HTML: fechaHTML,
        hora_HTML: "21:00 Horas",
        lugar_nombre: "El Jardín Eventos",
        lugar_direccion: "El Jardín 123, Provincia de Buenos Aires",
        nombre_completo_para_registro: "Nombre Modelo",
        email_para_registro: "modelo@gmail.com",
        whatsapp_para_registro: "15425432535",
      }));

      console.log({tipoevento: preview.tipoEvento});
      this.navigateTo(preview.tipoEvento);
    }
  }

  navigateTo(type: string): void {
    switch (type) {
      case 'birthday':
        this.router.navigateByUrl('/birthday');
        break;
      case 'wedding':
        this.router.navigateByUrl('/wedding');
        break;
      case 'baby-shower':
        this.router.navigateByUrl('/baby-shower');
        break;
      default:
        break;
    }
  }


}
