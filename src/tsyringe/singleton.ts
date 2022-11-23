import {inject, singleton} from 'tsyringe';
import {Logger} from 'pino';

@singleton()
export default class Singleton {
  private callCount = 0;

  constructor(
    @inject('Logger') private logger: Logger
  ) {}

  sayHello() {
    this.callCount++;
    this.logger.info(`Singleton: hello. I have been called ${this.callCount} times.`);
  }
}
