import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ConsolecompComponent } from './consolecomp/consolecomp.component';


@NgModule({
  declarations: [
    AppComponent,
    ConsolecompComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
