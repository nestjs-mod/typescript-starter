import {
  DefaultNestApplicationInitializer,
  DefaultNestApplicationListener,
  InfrastructureMarkdownReportGenerator,
  bootstrapNestApplication,
} from '@nestjs-mod/common';
import { readFileSync } from 'fs';
import { join } from 'path';
import { AppModule } from './app.module';

const pkg = JSON.parse(
  readFileSync(join(__dirname, '..', 'package.json')).toString(),
);

bootstrapNestApplication({
  project: {
    name: pkg.name,
    description: pkg.description,
  },
  modules: {
    system: [
      DefaultNestApplicationInitializer.forRoot(),
      DefaultNestApplicationListener.forRoot({
        staticEnvironments: { port: 3000 },
      }),
    ],
    feature: [AppModule.forRoot()],
    // Disable infrastructure modules in production
    ...(process.env['NODE_ENV'] !== 'production'
      ? {
          infrastructure: [
            InfrastructureMarkdownReportGenerator.forRoot({
              staticConfiguration: {
                markdownFile: join(__dirname, '..', 'INFRASTRUCTURE.MD'),
              },
            }),
          ],
        }
      : {}),
  },
});
