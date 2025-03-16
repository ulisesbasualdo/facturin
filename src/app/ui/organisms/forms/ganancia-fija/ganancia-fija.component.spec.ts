import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GananciaFijaComponent } from './ganancia-fija.component';

describe('GananciaFijaComponent', () => {
  let component: GananciaFijaComponent;
  let fixture: ComponentFixture<GananciaFijaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GananciaFijaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GananciaFijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
