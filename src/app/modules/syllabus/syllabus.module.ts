import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SyllabusRoutingModule} from './syllabus-routing.module';
import {SharedToolsModule} from '../shared-tools/shared-tools.module';

@NgModule({
  declarations: [],
  imports: [
    SharedToolsModule,
    CommonModule,
    SyllabusRoutingModule
  ],
  exports: []
})
export class SyllabusModule {
}
