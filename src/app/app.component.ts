import {Component, OnInit} from '@angular/core';
import {Logger} from "./modules/am-logger/log-logger";
import {LogService} from "./modules/am-logger/log.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  logger: Logger;

  constructor(private logService: LogService){
    this.logger = logService.getLogger(this.constructor.name);
  }

  ngOnInit(): void {
    this.logger.debug("Hello World");
    //this.logger.testLog("Hello World");
    //this.logger.doTheLog("Hello World");
    //this.logger.sLog("Hello World");

  }
}
