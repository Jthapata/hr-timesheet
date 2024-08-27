import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
  declarations: [ //components associated w this module
    AppComponent
  ],
  imports: [ //all of our imports available to our components
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ //provice services to our components
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent] //first component that loads
})
export class AppModule { }
