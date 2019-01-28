import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'syllabus', pathMatch: 'full'},
  {path: 'syllabus', loadChildren: './modules/syllabus/syllabus.module#SyllabusModule'},
  {path: 'dashboard', loadChildren: './modules/dashboard/dashboard.module#DashboardModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
