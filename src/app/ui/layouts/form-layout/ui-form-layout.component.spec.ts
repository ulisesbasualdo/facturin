import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiFormLayoutComponent } from './ui-form-layout.component';

describe('UiFormLayoutComponent', () => {
  let component: UiFormLayoutComponent;
  let fixture: ComponentFixture<UiFormLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiFormLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiFormLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
