import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import hbsSettings from './settings/hbsSettings';
import { join } from 'path';
import { NotFoundExceptionFilter } from '@/exceptionFilters/NotFoundExceptionFilter';
import * as session from 'express-session';
import * as passport from 'passport';
import { ValidationPipe } from '@/pipes/validation.pipe';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const MongoDBStore = require('connect-mongodb-session')(session);

const { SERVER_PORT, SESSIONS_DB_PATH, SESSIONS_SECRET } = process.env;

const store = new MongoDBStore({
  uri: SESSIONS_DB_PATH,
  collection: 'sessions',
});
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Validation
  app.useGlobalPipes(new ValidationPipe());

  app.useStaticAssets(join(__dirname, '..', '/public'));
  app.useStaticAssets(join(__dirname, '..', '/client/dist'), {
    index: false,
  });
  // add hbs
  hbsSettings(app);

  app.use(
    session({
      secret: SESSIONS_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
      },
      store,
    }),
  );
  app.use(passport.initialize());
  app.use(passport.session());
  // redirect to 404 page
  app.useGlobalFilters(new NotFoundExceptionFilter());

  await app.listen(SERVER_PORT);
}
bootstrap();
