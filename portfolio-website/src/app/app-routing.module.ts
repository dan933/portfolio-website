import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OverviewComponent } from './overview/overview.component';
import { RProjectsComponent } from './r-projects/r-projects.component';
import { CProjectsPictureFilterComponent } from './c-projects/c-projects-picture-filter/c-projects-picture-filter.component';
import { CProjectsCreditComponent } from './c-projects/c-projects-credit/c-projects-credit.component';
import { CProjectsSubstitutionComponent } from './c-projects/c-projects-substitution/c-projects-substitution.component';
import { CProjectsRecoverComponent } from './c-projects/c-projects-recover/c-projects-recover.component';
import { CProjectsSpellerComponent } from './c-projects/c-projects-speller/c-projects-speller.component';

import { PythonProjectsComponent } from './python-projects/python-projects.component';
import { SqlProjectsComponent } from './sql-projects/sql-projects.component';

const routes: Routes = [
  { path: 'overview', component: OverviewComponent },
  { path: 'r-projects', component: RProjectsComponent },
  { path: 'c-projects/credit', component: CProjectsCreditComponent },
  { path: 'c-projects', component: CProjectsPictureFilterComponent },
  { path: 'c-projects/substitution', component: CProjectsSubstitutionComponent },
  { path: 'c-projects/recover', component: CProjectsRecoverComponent },
  { path: 'c-projects/speller', component: CProjectsSpellerComponent },
  { path: 'python-projects', component: PythonProjectsComponent },
  { path: 'sql-projects', component: SqlProjectsComponent },
  { path: '',   redirectTo: 'overview', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
