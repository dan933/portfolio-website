import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OverviewComponent } from './overview/overview.component';
import { RProjectsComponent } from './r-projects/r-projects.component';
import { CProjectsPictureFilterComponent } from './c-projects/c-projects-picture-filter/c-projects-picture-filter.component';

const routes: Routes = [
  { path: 'overview', component: OverviewComponent },
  { path: 'r-projects', component: RProjectsComponent },
  { path: 'c-projects', component: CProjectsPictureFilterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
