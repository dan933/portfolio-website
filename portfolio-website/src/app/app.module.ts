import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//angular materials module
import { AppMaterialModule } from './app-material/app-material.module';
import { OverviewComponent } from './components/overview/overview.component';
import { RProjectsComponent } from './components/r-projects/r-projects.component';
import { CProjectsPictureFilterComponent } from './components/c-projects/c-projects-picture-filter/c-projects-picture-filter.component';
import { CProjectsCreditComponent } from './components/c-projects/c-projects-credit/c-projects-credit.component';
import { CProjectsSubstitutionComponent } from './components/c-projects/c-projects-substitution/c-projects-substitution.component';
import { CProjectsRecoverComponent } from './components/c-projects/c-projects-recover/c-projects-recover.component';
import { CProjectsSpellerComponent } from './components/c-projects/c-projects-speller/c-projects-speller.component';
import { PythonProjectsComponent } from './components/python-projects/python-projects.component';
import { SqlProjectsComponent } from './components/sql-projects/sql-projects.component';
import { FullstackComponent } from './components/fullstack/fullstack.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

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
    SqlProjectsComponent,
    FullstackComponent,
    ContactUsComponent
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
