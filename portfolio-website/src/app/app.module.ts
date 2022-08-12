import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//layout module
import { FlexLayoutModule } from '@angular/flex-layout';

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
import { InvoiceAppComponent } from './components/fullstack/invoice-app/invoice-app.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { SubNavComponent } from './components/c-projects/sub-nav/sub-nav.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SideNavListComponent } from './components/nav-bar/side-nav-list/side-nav-list.component';
import { NbaApplicationComponent } from './components/fullstack/nba-application/nba-application.component';

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
    InvoiceAppComponent,
    ContactUsComponent,
    SubNavComponent,
    NavBarComponent,
    SideNavListComponent,
    NbaApplicationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
