import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiSubmitBtnComponent } from './ui-submit-btn.component';

describe('UiSubmitBtnComponent', () => {
  let component: UiSubmitBtnComponent;
  let fixture: ComponentFixture<UiSubmitBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiSubmitBtnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiSubmitBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
