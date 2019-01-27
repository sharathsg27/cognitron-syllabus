import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CourseUnitsComponent} from './components/course-units/course-units.component';

const routes: Routes = [
  {path: '', component: CourseUnitsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SyllabusRoutingModule {
}
