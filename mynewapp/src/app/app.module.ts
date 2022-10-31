import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SerieComponent } from './serie/serie.component';

@NgModule({
  declarations: [
    AppComponent,
    SerieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  exports:[SerieComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
