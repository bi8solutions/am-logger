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
