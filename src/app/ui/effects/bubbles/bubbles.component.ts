import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'ui-bubbles-effect',
  standalone: true,
  imports: [NgClass, NgStyle],
  template: `
    @for (burbuja of burbujasNumber; track burbuja) {
      <div
        [ngStyle]="{ '--i': burbuja.randomValue }"
        [ngClass]="burbuja.randomClass"
      ></div>
    }
  `,
  host: { class: 'burbujas' },
  styles: [
    `
      .burbujas {
        position: fixed;
        width: 100%;
        height: 250vh;
        text-align: center;
      }

      .burbujas > div {
        display: inline-block;
        position: relative;
        bottom: -40vh;
        opacity: 0;
        transform: scale(0);
        user-select: none;
        border-radius: 50%;
        width: 30px;
        height: 30px;
        animation: burbujas-animation 15s linear infinite;
        animation-duration: calc(125s / var(--i));
        z-index: 0;
      }
      .burbuja-amarilla {
        background-color: #fecb6b;
        box-shadow: 0px 0px 15px 7px rgba(255, 255, 255, 0.27);
        -webkit-box-shadow: 0px 0px 15px 7px rgba(255, 255, 255, 0.27);
        -moz-box-shadow: 0px 0px 15px 7px rgba(255, 255, 255, 0.27);
      }

      .burbuja-blanca {
        background-color: #ffffff;
        box-shadow: 0px 0px 15px 7px rgba(255, 255, 255, 0.27);
        -webkit-box-shadow: 0px 0px 15px 7px rgba(255, 255, 255, 0.27);
        -moz-box-shadow: 0px 0px 15px 7px rgba(255, 255, 255, 0.27);
      }

      .burbuja-gris {
        background-color: #00eaffaf;
        box-shadow: 0px 0px 15px 7px rgba(255, 255, 255, 0.27);
        -webkit-box-shadow: 0px 0px 15px 7px rgba(255, 255, 255, 0.27);
        -moz-box-shadow: 0px 0px 15px 7px rgba(255, 255, 255, 0.27);
      }

      @keyframes burbujas-animation {
        25% {
          opacity: 0.8;
          bottom: 25vh;
          transform: scale(0.25);
        }
        50% {
          opacity: 1;
          bottom: 50vh;
          transform: scale(0.5);
        }
        75% {
          opacity: 0.75;
          bottom: 75vh;
          transform: scale(0.6);
        }
        100% {
          opacity: 0;
          bottom: 100vh;
          transform: scale(0.5);
        }
      }
      @media (max-width: 768px) {
        .burbujas > div {
          animation: burbujas-animation-movil 15s linear infinite;
          animation-duration: calc(225s / var(--i));
        }
        @keyframes burbujas-animation-movil {
          25% {
            opacity: 0.8;
            bottom: -25vh;
            transform: scale(0.25);
          }
          50% {
            opacity: 1;
            bottom: 30vh;
            transform: scale(0.5);
          }
          75% {
            opacity: 0.75;
            bottom: 55vh;
            transform: scale(0.6);
          }
          100% {
            opacity: 0;
            bottom: 70vh;
            transform: scale(0.5);
          }
        }
      }
    `,
  ],
})
export class UIBubblesEffectComponent {
  burbujasNumber = Array.from(
    {
      length: 45,
    },
    (_, index) => ({
      id: index + 1,
      randomValue: this.getRandomValue(),
      randomClass: this.obtenerClaseRandom(),
    })
  );

  getRandomValue(init: number = 21, endMore: number = 10): number {
    return Math.floor(Math.random() * init) + endMore;
  }

  obtenerColorRandomEntre3Colores(): string {
    const colores = ['#fecb6b', '#ffffff', '#2e2d35'];
    return colores[Math.floor(Math.random() * 3)];
  }

  obtenerClaseRandom(): string {
    const clases = ['burbuja-amarilla', 'burbuja-blanca', 'burbuja-gris'];
    return clases[Math.floor(Math.random() * 3)];
  }
}
