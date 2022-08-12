import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OverviewComponent } from './components/overview/overview.component';
import { RProjectsComponent } from './components/r-projects/r-projects.component';
import { CProjectsPictureFilterComponent } from './components/c-projects/c-projects-picture-filter/c-projects-picture-filter.component';
import { CProjectsCreditComponent } from './components/c-projects/c-projects-credit/c-projects-credit.component';
import { CProjectsSubstitutionComponent } from './components/c-projects/c-projects-substitution/c-projects-substitution.component';
import { CProjectsRecoverComponent } from './components/c-projects/c-projects-recover/c-projects-recover.component';
import { CProjectsSpellerComponent } from './components/c-projects/c-projects-speller/c-projects-speller.component';
import { InvoiceAppComponent } from './components/fullstack/invoice-app/invoice-app.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

import { PythonProjectsComponent } from './components/python-projects/python-projects.component';
import { SqlProjectsComponent } from './components/sql-projects/sql-projects.component';
import { NbaApplicationComponent } from './components/fullstack/nba-application/nba-application.component';

const routes: Routes = [
  { path: 'overview', component: OverviewComponent },
  {
    path: 'projects',
    children: [
      { path: 'r-projects', component: RProjectsComponent },
      { path: 'c-projects/credit', component: CProjectsCreditComponent },
      { path: 'c-projects/picture', component: CProjectsPictureFilterComponent },
      { path: 'c-projects/substitution', component: CProjectsSubstitutionComponent },
      { path: 'c-projects/recover', component: CProjectsRecoverComponent },
      { path: 'c-projects/speller', component: CProjectsSpellerComponent },
      { path: 'python-projects', component: PythonProjectsComponent },
      { path: 'sql-projects', component: SqlProjectsComponent },
      { path: 'invoice-app', component: InvoiceAppComponent },
      { path: 'nba-app', component: NbaApplicationComponent },
    ]
  },
  { path: 'contact', component: ContactUsComponent },
  { path: '',   redirectTo: 'overview', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
