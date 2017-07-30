import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {LogService} from "./am-logger/log.service";

@NgModule({
    providers: [LogService],
    declarations: [],
    imports: [
        CommonModule
    ],
    exports: [

    ]
})
export class LogModule {

}
