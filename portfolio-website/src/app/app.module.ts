import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//angular materials module
import { AppMaterialModule } from './app-material/app-material.module';
import { OverviewComponent } from './overview/overview.component';
import { RProjectsComponent } from './r-projects/r-projects.component';
import { CProjectsComponent } from './c-projects/c-projects.component';
import { CProjectsPictureFilterComponent } from './c-projects/c-projects-picture-filter/c-projects-picture-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    RProjectsComponent,
    CProjectsComponent,
    CProjectsPictureFilterComponent
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
