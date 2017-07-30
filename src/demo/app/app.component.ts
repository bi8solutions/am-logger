import { Component } from '@angular/core';
import { Logger, LogService} from 'am-logger';
import * as moment from 'moment'

@Component({
  selector: 'demo-app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  meaning: number;
  logger: Logger;

  constructor(logService: LogService) {
    this.logger = logService.getLogger(this.constructor.name);
  }

  info(){
    this.logger.info("Hello World INFO");
  }

  trace(){
    this.logger.trace("Hello World TRACE");
  }

  debug(){
    this.logger.debug("Hello World DEBUG");

  }

  error(){
    this.logger.error("Hello World ERROR");
  }

  warn(){
    this.logger.warn("Hello World WARN");
  }
}
