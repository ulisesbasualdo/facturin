import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiBirthdayPageComponent } from './ui-birthday-page.component';

describe('UiBirthdayPageComponent', () => {
  let component: UiBirthdayPageComponent;
  let fixture: ComponentFixture<UiBirthdayPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiBirthdayPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiBirthdayPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
