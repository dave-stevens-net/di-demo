import "reflect-metadata";
import pino, {Logger} from 'pino';
import {container} from 'tsyringe';
import TestService from './tsyringe/test-service';

const logger = pino();

container.register('env', {useValue: 'dev'});
container.register<Logger>('Logger', {useValue: logger});

logger.info('inside demo-tsyring.ts');

const service = container.resolve(TestService);
service.sayHello('tsyring');
service.showEnv();
