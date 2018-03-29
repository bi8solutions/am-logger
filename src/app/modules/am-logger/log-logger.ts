import {LogService} from "./log.service";

export class Logger {
  //public log = console.log.bind(window.console);

  constructor(private service: LogService, private name: string) {
  }

  trace(message: string, payload?: any){
    this.service.trace(message, payload, this.name);
  }

  debug(message: string, payload?: any){
    this.service.debug(message, payload, this.name);
  }

  info(message: string, payload?: any){
    this.service.info(message, payload, this.name);
  }

  warn(message: string, payload?: any){
    this.service.warn(message, payload, this.name);
  }

  error(message: string, payload?: any){
    this.service.error(message, payload, this.name);
  }

  /*public get sLog (): Function {
    const log = console.log.bind(window.console);
    let stackFrame = st.getSync()[1];
    console.log(stackFrame);
    return log;

    // Implemnt server-side logging

    //return clientSideLogging ? log : () => {};
  }*/
}
