import { bootstrapNestApplication, createNestModule } from '@nestjs-mod/common';
import { DefaultTestNestApplicationCreate } from '@nestjs-mod/testing';
import { TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await bootstrapNestApplication({
      project: {
        name: 'TestApplication',
        description: 'Test application',
      },
      modules: {
        system: [DefaultTestNestApplicationCreate.forRoot()],
        feature: [
          createNestModule({
            moduleName: 'TestAppModule',
            controllers: [AppController],
            providers: [AppService],
          }).TestAppModule.forRoot(),
        ],
      },
    });
  });

  describe('getHello', () => {
    it('should return "Hello World!"', () => {
      const appController = app.get(AppController);
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
