import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//angular materials module
import { AppMaterialModule } from './app-material/app-material.module';
import { OverviewComponent } from './overview/overview.component';
import { RProjectsComponent } from './r-projects/r-projects.component';
import { CProjectsPictureFilterComponent } from './c-projects/c-projects-picture-filter/c-projects-picture-filter.component';
import { CProjectsCreditComponent } from './c-projects/c-projects-credit/c-projects-credit.component';
import { CProjectsSubstitutionComponent } from './c-projects/c-projects-substitution/c-projects-substitution.component';
import { CProjectsRecoverComponent } from './c-projects/c-projects-recover/c-projects-recover.component';
import { CProjectsSpellerComponent } from './c-projects/c-projects-speller/c-projects-speller.component';
import { PythonProjectsComponent } from './python-projects/python-projects.component';
import { SqlProjectsComponent } from './sql-projects/sql-projects.component';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    RProjectsComponent,
    CProjectsPictureFilterComponent,
    CProjectsCreditComponent,
    CProjectsSubstitutionComponent,
    CProjectsRecoverComponent,
    CProjectsSpellerComponent,
    PythonProjectsComponent,
    SqlProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
