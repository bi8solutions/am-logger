import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LogService} from "./log.service";

@NgModule({
  providers: [LogService],
  imports: [
    CommonModule
  ],
  declarations: []
})
export class AmLoggerModule { }

/*
export {Logger } from './src/am-logger/log-logger';
export {LogConfig } from './src/am-logger/log-config';
export {LogLevel } from './src/am-logger/log-level.enum';
export {LogService } from './src/am-logger/log.service';
export {LogModule} from './src/module';
*/
