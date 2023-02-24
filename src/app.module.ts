import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { I18nModule } from 'nestjs-i18n';
import { PathResolver } from '@/settings/PathResolver';
import { LangService } from './lang/lang.service';
import { LangModule } from './lang/lang.module';
import { BlogModule } from './blog/blog.module';
import { MongooseModule } from '@nestjs/mongoose';
import { join } from 'path';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    // .env
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    // translates
    I18nModule.forRoot({
      fallbackLanguage: 'ua',
      loaderOptions: {
        path: join(__dirname, '/i18n/'),
        watch: true,
      },
      resolvers: [{ use: PathResolver, options: ['lang'] }],
      viewEngine: 'hbs',
    }),
    MongooseModule.forRoot('mongodb://localhost/pet-shop'),

    // other modules
    LangModule,
    BlogModule,
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService, LangService],
})
export class AppModule {}
