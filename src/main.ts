import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import * as hbs from 'hbs';
import { AppModule } from './app.module';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const hbsutils = require('hbs-utils')(hbs);

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // add hbs
  app.useStaticAssets(join(__dirname, '..', '/public'));
  hbsutils.registerPartials(join(__dirname, '..', '/views/partials'));
  hbsutils.registerWatchedPartials(join(__dirname, '..', '/views/partials'));
  app.setBaseViewsDir(join(__dirname, '..', '/views'));
  app.set('view options', { layout: 'layouts/layout' });
  app.setViewEngine('hbs');

  await app.listen(3000);
}
bootstrap();
