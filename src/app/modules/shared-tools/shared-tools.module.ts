import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatBadge, MatBadgeModule,
  MatButton, MatButtonModule,
  MatDivider, MatDividerModule, MatExpansionModule,
  MatFormFieldModule, MatGridListModule,
  MatIcon, MatIconModule,
  MatInputModule,
  MatList,
  MatListItem, MatListModule, MatNavList,
  MatRippleModule,
  MatSidenav,
  MatSidenavContainer,
  MatSidenavContent, MatSidenavModule, MatSliderModule,
  MatToolbar, MatToolbarModule,
  MatToolbarRow, MatTooltipModule
} from '@angular/material';
import {CourseUnitsComponent} from '../syllabus/components/course-units/course-units.component';
import {SideNavComponent} from '../../utils/side-nav/side-nav.component';
import {HangoutsComponent} from '../../utils/hangouts/hangouts.component';
import {ExpansionPanelComponent} from '../../utils/expansion-panel/expansion-panel.component';
import {PortalModule} from '@angular/cdk/portal';
import {MinusPlusButtonComponent} from '../../utils/minus-plus-button/minus-plus-button.component';
import {CourseHeaderComponent} from '../../utils/course-header/course-header.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    // Components
    CourseUnitsComponent,
    SideNavComponent,
    HangoutsComponent,
    ExpansionPanelComponent,
    MinusPlusButtonComponent,
    CourseHeaderComponent
  ],
  imports: [
    CommonModule,
    PortalModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    FormsModule,
    MatTooltipModule,
    MatExpansionModule,
    MatRippleModule,
    MatBadgeModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatListModule,
    MatSliderModule,
    MatSidenavModule,
    MatToolbarModule
  ],
  exports: [
    // Components
    CourseUnitsComponent,
    SideNavComponent,
    HangoutsComponent,
    ExpansionPanelComponent,
    MinusPlusButtonComponent,
    CourseHeaderComponent,
    // Tools
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatDividerModule,
    MatBadgeModule,
    MatButtonModule,
    MatSliderModule
  ],
})
export class SharedToolsModule {
}
