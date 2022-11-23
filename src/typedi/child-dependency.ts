import {Logger} from 'pino';
import {Inject, Service} from 'typedi';

@Service()
export default class ChildDependency {
  constructor(
    @Inject('Logger') private logger: Logger
  ) {}

  sayHello(name: string) {
    this.logger.info(`ChildDependency: hello ${name}`);
  }
}
