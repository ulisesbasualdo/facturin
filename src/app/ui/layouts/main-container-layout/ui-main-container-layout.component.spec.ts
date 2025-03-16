import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiMainContainerLayoutComponent } from './ui-main-container-layout.component';

describe('UiMainContainerLayoutComponent', () => {
  let component: UiMainContainerLayoutComponent;
  let fixture: ComponentFixture<UiMainContainerLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiMainContainerLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiMainContainerLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
