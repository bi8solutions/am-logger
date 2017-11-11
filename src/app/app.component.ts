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
    this.logger.info("Hello World");
  }
}
