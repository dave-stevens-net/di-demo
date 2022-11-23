import {inject, injectable} from 'tsyringe';
import {Logger} from 'pino';

@injectable()
export default class ChildDependency {
  constructor(
    @inject('Logger') private logger: Logger
  ) {}

  sayHello(name: string) {
    this.logger.info(`ChildDependency: hello ${name}`);
  }
}
