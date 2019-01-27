import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatAccordion,
  MatBadge,
  MatButton,
  MatChip,
  MatChipList,
  MatDivider,
  MatExpansionPanel,
  MatExpansionPanelActionRow,
  MatExpansionPanelHeader,
  MatExpansionPanelTitle,
  MatFormField, MatFormFieldControl,
  MatFormFieldModule, MatGridListModule,
  MatIcon,
  MatInput,
  MatInputModule,
  MatList,
  MatListItem,
  MatNavList,
  MatRipple,
  MatSidenav,
  MatSidenavContainer,
  MatSidenavContent, MatSlider, MatSliderModule,
  MatToolbar,
  MatToolbarRow
} from '@angular/material';
import {CourseUnitsComponent} from '../syllabus/components/course-units/course-units.component';
import {SideNavComponent} from '../../utils/side-nav/side-nav.component';
import {HangoutsComponent} from '../../utils/hangouts/hangouts.component';
import {ExpansionPanelComponent} from '../../utils/expansion-panel/expansion-panel.component';
import {PortalModule} from '@angular/cdk/portal';
import {MinusPlusButtonComponent} from '../../utils/minus-plus-button/minus-plus-button.component';
import {MatExpansionModule} from '@angular/material/typings/expansion';
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
    CourseHeaderComponent,
    // Tools
    MatIcon,
    MatSidenavContainer,
    MatSidenavContent,
    MatSidenav,
    MatToolbar,
    MatToolbarRow,
    MatNavList,
    MatDivider,
    MatListItem,
    MatList,
    MatRipple,
    MatButton,
    MatAccordion,
    MatExpansionPanel,
    MatExpansionPanelTitle,
    MatExpansionPanelHeader,
    MatExpansionPanelActionRow,
    MatChip,
    MatChipList,
    MatBadge,
    MatSlider
  ],
  imports: [
    CommonModule,
    PortalModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    FormsModule
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
    MatIcon,
    MatSidenavContainer,
    MatSidenavContent,
    MatSidenav,
    MatToolbar,
    MatToolbarRow,
    MatNavList,
    MatDivider,
    MatListItem,
    MatList,
    MatRipple,
    MatButton,
    MatAccordion,
    MatExpansionPanel,
    MatExpansionPanelTitle,
    MatExpansionPanelHeader,
    MatExpansionPanelActionRow,
    MatChip,
    MatChipList,
    MatBadge,
    MatSlider
  ],
})
export class SharedToolsModule {
}
