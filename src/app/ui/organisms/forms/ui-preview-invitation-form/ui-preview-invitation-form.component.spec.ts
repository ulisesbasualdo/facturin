import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiPreviewInvitationFormComponent } from './ui-preview-invitation-form.component';

describe('UiPreviewInvitationFormComponent', () => {
  let component: UiPreviewInvitationFormComponent;
  let fixture: ComponentFixture<UiPreviewInvitationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiPreviewInvitationFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiPreviewInvitationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
