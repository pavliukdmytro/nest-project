import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import hbsSettings from './settings/hbsSettings';
import { join } from 'path';
import { NotFoundExceptionFilter } from '@/exceptionFilters/NotFoundExceptionFilter';

const { SERVER_PORT } = process.env;

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(join(__dirname, '..', '/public'));
  app.useStaticAssets(join(__dirname, '..', '/client/dist'), {
    index: false,
  });

  // redirect to 404 page
  app.useGlobalFilters(new NotFoundExceptionFilter());

  // add hbs
  hbsSettings(app);

  await app.listen(SERVER_PORT);
}
bootstrap();
