import {LogLevel} from "./log-level.enum";
export class LogMessage {
  date: any;
  logger: string;
  location: string;
  level: LogLevel;
  message: string;
  payload: any;

  constructor(options: {
    level?: LogLevel,
    message?: string,
    payload?: any,
    date?: any,
    logger?: string,
    location?: string
  } = {}) {
    this.level = options.level || null;
    this.message = options.message || '';
    this.payload = options.payload || null;
    this.date = options.date || new Date();
    this.logger = options.logger || '';
    this.location = options.location || 'console';
  }
}
