import { Component } from '@angular/core';
import { UIBubblesEffectComponent } from '../../effects/bubbles/bubbles.component';
import { UiMainContainerLayoutComponent } from '../../00-fundations/layouts/ui-main-container-layout/ui-main-container-layout.component';
import { IAnfitrion } from '../../../core/interfaces/IAnfitrion';
import { RouterLink } from '@angular/router';
import { LocalDataService } from '../../../core/services/local-data-service.service';

@Component({
  selector: 'ui-birthday-page',
  standalone: true,
  imports: [
    UIBubblesEffectComponent,
    UiMainContainerLayoutComponent,
    RouterLink,
  ],
  template: `
    <!-- <app-loader></app-loader> -->
      <ui-bubbles-effect />
      <ui-main-container-layout>
        <div appAnimations animationInput="fadeInTop" class="subtitulo-top">
          Estás invitado/a a la
        </div>
        <div appAnimations animationInput="fadeInTop" class="titulo-evento">
          <h2>FIESTA DE CUMPLEAÑOS</h2>
        </div>
        <div appAnimations animationInput="fadeInBottom" class="subtitulo">
          para festejar junto a
        </div>
        <div appAnimations animationInput="scaleIn" class="nombre">
          {{ anfitrion.nya }}
        </div>
        @if (anfitrion.edad == 1) {
          <div
            appAnimations
            animationInput="scaleInDiscreto"
            class="subtitulo-evento"
          >
            Su Primer Añito
          </div>
        } @else if (anfitrion.edad > 1 && anfitrion.edad < 4) {
          <div
            appAnimations
            animationInput="scaleInDiscreto"
            class="subtitulo-evento"
          >
            sus {{ anfitrion.edad }} añitos
          </div>
        } @else if (anfitrion.edad > 3) {
          <div
            appAnimations
            animationInput="scaleInDiscreto"
            class="subtitulo-evento"
          >
            sus {{ anfitrion.edad }} años
          </div>
        }
        <div class="contador">
          <div
            appAnimations
            animationInput="fadeInBottom"
            class="cartel cartel-dias"
          >
            <div #dias id="dias"></div>
            <div class="h3">
              <h3>Días</h3>
            </div>
          </div>
          <div appAnimations animationInput="fadeInBottom" class="cartel">
            <div #horas id="horas"></div>
            <div class="h3">
              <h3>Horas</h3>
            </div>
          </div>
          <div appAnimations animationInput="fadeInBottom" class="cartel">
            <div #minutos id="minutos"></div>
            <div class="h3">
              <h3>Minutos</h3>
            </div>
          </div>
          <div appAnimations animationInput="fadeInBottom" class="cartel">
            <div #segundos id="segundos"></div>
            <div class="h3">
              <h3>Segundos</h3>
            </div>
          </div>
        </div>
        <div class="fecha">{{ anfitrion.fecha_HTML }}</div>
        <div class="hora">{{ anfitrion.hora_HTML }}</div>
        <div class="lugar">{{ anfitrion.lugar_nombre }}</div>
        <div class="direccion">{{ anfitrion.lugar_direccion }}</div>
        <div class="texto-cta">¿Vas a venir?</div>
        <a
          class="boton-cta"
          [routerLink]="[{ fragment: 'formularioAsistencia' }]"
          routerLinkActive="router-link-active"
        >
          Confirmar Asistencia</a
        >
        <div class="mapa">
          <img
            src="img/mapa.jpeg"
            width="600"
            height="450"
            alt="Aquí irá tu mapa"
          />
        </div>

        <div class="slider">
          <!-- <app-carrusel-resultado-modelo
          class="w-135"
        ></app-carrusel-resultado-modelo>
      </div>
      <div #formularioAsistencia class="formulario">
        <app-form-resultado-modelo
          class="form-asistencia"
        ></app-form-resultado-modelo> -->
        </div>
        <div class="contenido profesional">
          <h2>¿Te gustó esta invitación?</h2>
          <p>
            El resultado final será con los datos y las fotos que quieras poner.
            Con una Invitación Digital tu Fiesta puede ser diferente desde el
            primer clic.
          </p>
          <p>
            Puedes sorprender a tus seres queridos y ahorrar tiempo y dinero en
            el envío de las tarjetas.
          </p>

          <h3>¿Cuál es el costo de una Invitación Digital?</h3>
          <p>
            El valor de nuestras invitaciones digitales incluye el diseño y seis
            meses de visibilidad online.
          </p>
          <p><strong>Precio Actual: $10.000 (pesos argentinos)</strong></p>
          <p><del>Precio Anterior: $20.000</del></p>

          <h3>Ventajas de nuestras Invitaciones Digitales:</h3>
          <ul>
            <li>
              <strong>Fácil Acceso al Panel de Administración:</strong>
              Recibirás un enlace para acceder a tu panel donde podrás ver y
              gestionar las confirmaciones de asistencia de tus invitados.
            </li>
            <li>
              <strong>Ahorro de Tiempo y Dinero:</strong> Olvídate de las
              complicaciones del envío de tarjetas físicas.
            </li>
          </ul>

          <h3>¿Cómo Comprar?</h3>
          <p>
            Envíanos un mensaje por WhatsApp. Coordinaremos el pago y los datos
            que se pondrán en la invitación.
          </p>
          <p><strong>Métodos de Pago:</strong></p>
          <ul>
            <li>
              <strong>Desde Argentina:</strong> Transferencia bancaria, Mercado
              Pago, Cuenta DNI y PayPal.
            </li>
            <li><strong>Desde fuera de Argentina:</strong> PayPal.</li>
          </ul>

          <a
            href="https://wa.me/5492291407553?text=Hola%2C%20estoy%20interesado%20en%20comprar%20una%20Invitaci%C3%B3n%20Digital%20para%20mi%20evento.%20Por%20favor%2C%20env%C3%ADame%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20proceso%20de%20pago%20y%20los%20datos%20que%20necesitas.%20Gracias."
            class="btn-whatsapp"
            >Comprar Ahora por WhatsApp</a
          >
        </div>
      </ui-main-container-layout>

  `,
  styles: ``,
})
export class UIBirthdayPageComponent {
  constructor(private readonly localDataService: LocalDataService) {}

  get anfitrion(): IAnfitrion {
    return this.localDataService.getAnfitrion;
  }
}
