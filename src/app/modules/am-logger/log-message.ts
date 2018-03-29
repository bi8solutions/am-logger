import {LogLevel} from "./log-level.enum";
export class LogMessage {
  fileName: string;
  functionName: string;
  lineNumber: number;
  columnNumber: number;
  date: any;
  logger: string;
  location: string;
  level: LogLevel;
  message: string;
  payload: any;

  constructor(options: {
    fileName?: string;
    functionName?: string;
    lineNumber?: number;
    columnNumber?: number;
    level?: LogLevel,
    message?: string,
    payload?: any,
    date?: any,
    logger?: string,
    location?: string
  } = {}) {
    this.fileName = options.fileName || null;
    this.functionName = options.functionName || null;
    this.lineNumber = options.lineNumber || null;
    this.columnNumber = options.columnNumber || null;
    this.level = options.level || null;
    this.message = options.message || '';
    this.payload = options.payload || null;
    this.date = options.date || new Date();
    this.logger = options.logger || '';
    this.location = options.location || 'console';
  }
}
