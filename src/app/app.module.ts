import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AmLoggerModule} from "./modules/am-logger/am-logger.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AmLoggerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
