import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { DepartmentsComponent } from './components/departments/departments.component';
import { TimesheetComponent } from './components/timesheet/timesheet.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { TopNavbarComponent } from './components/top-navbar/top-navbar.component';
import { AnalyticsTableComponent } from './components/analytics-table/analytics-table.component';
import { MaterialModule } from './modules/material.module';

@NgModule({
  declarations: [ //components associated w this module
    AppComponent, DepartmentsComponent, TimesheetComponent, AnalyticsComponent, TopNavbarComponent, AnalyticsTableComponent
  ],
  imports: [ //all of our imports available to our components
    BrowserModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [ //provice services to our components
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent] //first component that loads
})
export class AppModule { }
