import "reflect-metadata";
import pino, {Logger} from 'pino';
import TestService from './typedi/test-service';
import {Container} from 'typedi';

const logger = pino();

Container.set<string>('env', 'dev');
Container.set<Logger>('Logger', logger);

logger.info('inside demo-typedi.ts');

const service = Container.get(TestService);
service.sayHello('typedi');
service.showEnv();
