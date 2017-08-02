import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {LogConfig, LogLevel, LogModule} from '@bi8/am-logger';

import { AppComponent }  from './app.component';

const logConfig : LogConfig = {
  level: LogLevel.debug
};

@NgModule({
  imports:      [
      BrowserModule,
      LogModule
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [
      { provide: 'LogConfig', useValue: logConfig }
  ]
})
export class AppModule { }
