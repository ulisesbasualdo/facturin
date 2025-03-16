import { Component } from '@angular/core';
import { UIPageLayoutComponent } from "../../00-fundations/layouts/page-layout/page-layout.component";
import { UiPreviewInvitationFormComponent } from "../../03-organisms/forms/ui-preview-invitation-form/ui-preview-invitation-form.component";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [UIPageLayoutComponent, UiPreviewInvitationFormComponent],
  template: `
    <ui-page-layout
      pageTitle="Visualizá tu invitación de forma gratuita"
    >
      <ui-preview-invitation-form />
    </ui-page-layout>
  `,
})
export class LandingPageComponent {}
