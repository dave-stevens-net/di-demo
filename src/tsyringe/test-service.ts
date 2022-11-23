import {Logger} from 'pino';
import {inject, injectable} from 'tsyringe';
import ChildDependency from './child-dependency';
import Singleton from './singleton';

@injectable()
export default class TestService {
  constructor(
    private child: ChildDependency,
    private singleton1: Singleton,
    private singleton2: Singleton,
    @inject('Logger') private logger: Logger,
    @inject('env') private env: string,
  ) {}

  sayHello(name: string) {
    this.logger.info(`Service: hello ${name}`);
    this.child.sayHello('parent');
    this.singleton1.sayHello();
    this.singleton2.sayHello();
  }

  showEnv() {
    this.logger.info(`Service: env = ${this.env}`);
  }
}
