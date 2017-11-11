import {Injectable, Inject} from '@angular/core';
import {LogLevel} from './log-level.enum';
import {LogConfig} from './log-config';
import {LogEvent} from './log-event.enum';
import {LogMessage} from './log-message';
import {Logger} from './log-logger';
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";

@Injectable()
export class LogService {

  private eventSource$ = new Subject<LogEvent>();
  private messageSource$ = new Subject<LogMessage>();

  // @TODO - add a proper appender console appender (separate from this service to log to the browser console)
  constructor(@Inject('LogConfig') private config: LogConfig) {

    // for now, we just do the console logging (as if we are an appender)
    this.messageSource$.subscribe(message => {

      // let location = {};
      // Error.captureStackTrace(location);
      let dateTime = `${message.date.toLocaleDateString()} ${message.date.toLocaleTimeString()}`;

      switch (message.level) {
        case LogLevel.debug:
          message.payload ? console.debug(`${dateTime} - ${message.logger} : ${message.message}`, message.payload)
                          : console.debug(`${dateTime} - ${message.logger} : ${message.message}`);
          break;
        case LogLevel.info:
          message.payload ? console.info(`${dateTime} - ${message.logger} : ${message.message}`, message.payload)
                          : console.info(`${dateTime} - ${message.logger} : ${message.message}`);
          break;
        case LogLevel.warn:
          message.payload ? console.warn(`${dateTime} - ${message.logger} : ${message.message}`, message.payload)
                          : console.warn(`${dateTime} - ${message.logger} : ${message.message}`);
          break;
        case LogLevel.error:
          message.payload ? console.error(`${dateTime} - ${message.logger} : ${message.message}`, message.payload)
                          : console.error(`${dateTime} - ${message.logger} : ${message.message}`);
          break;
        case LogLevel.trace:
          message.payload ? console.trace(`${dateTime} - ${message.logger} : ${message.message}`, message.payload)
                          : console.trace(`${dateTime} - ${message.logger} : ${message.message}`);
          break;
      }
    });
  }

  getLogger(name: string) {
    return new Logger(this, name);
  }

  getConfig() : LogConfig {
    return this.config;
  }

  getEventSourceObserver(): Observable<LogEvent> {
    return this.eventSource$.asObservable();
  }

  getMessageSourceObserver(): Observable<LogMessage> {
    return this.messageSource$.asObservable();
  }

  trace(message: string, payload?: any, logger?: string) {
    this.messageSource$.next({
      level: LogLevel.trace,
      message: message,
      payload: payload,
      date: new Date(),
      logger: logger,
      location: ''
    });
  }

  debug(message: string, payload?: any, logger?: string) {
    this.messageSource$.next({
      level: LogLevel.debug,
      message: message,
      payload: payload,
      logger: logger,
      date: new Date(),
      location: ''  }
    );
  }

  info(message: string, payload?: any, logger?: string) {
    this.messageSource$.next({
      level: LogLevel.info,
      message: message,
      payload: payload,
      logger: logger,
      date: new Date(),
      location: ''  }
    );
  }

  warn(message: string, payload?: any, logger?: string) {
    this.messageSource$.next({
      level: LogLevel.warn,
      message: message,
      payload: payload,
      logger: logger,
      date: new Date(),
      location: ''  }
    );
  }

  error(message: string, payload?: any, logger?: string) {
    this.messageSource$.next({
      level: LogLevel.error,
      message: message,
      payload: payload,
      logger: logger,
      date: new Date(),
      location: ''  }
    );
  }
}
