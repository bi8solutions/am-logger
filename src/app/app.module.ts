import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AmLoggerModule} from "./modules/am-logger/am-logger.module";
import {LogLevel} from "./modules/am-logger/log-level.enum";
import {LogConfig} from "./modules/am-logger/log-config";

const logConfig : LogConfig = {
  level: LogLevel.debug
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AmLoggerModule
  ],
  providers: [{
    provide: 'LogConfig',
    useValue: logConfig
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
