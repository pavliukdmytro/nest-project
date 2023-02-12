import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import hbsSettings from './settings/hbsSettings';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(join(__dirname, '..', '/public'));
  app.useStaticAssets(join(__dirname, '..', '/client/dist'), {
    index: false,
  });

  // add hbs
  hbsSettings(app);

  await app.listen(3000);
}
bootstrap();
