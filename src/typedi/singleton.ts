import {Logger} from 'pino';
import {Inject, Service} from 'typedi';

@Service()
export default class Singleton {
  private callCount = 0;

  constructor(
    @Inject('Logger') private logger: Logger
  ) {}

  sayHello() {
    this.callCount++;
    this.logger.info(`Singleton: hello. I have been called ${this.callCount} times.`);
  }
}
