import {Logger} from 'pino';
import ChildDependency from './child-dependency';
import Singleton from './singleton';
import {Inject, Service} from 'typedi';

@Service()
export default class TestService {
  constructor(
    private child: ChildDependency,
    private singleton1: Singleton,
    private singleton2: Singleton,
    @Inject('Logger') private logger: Logger,
    @Inject('env') private env: string,
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
