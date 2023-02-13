import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {
  I18nModule,
  QueryResolver,
  // AcceptLanguageResolver,
} from 'nestjs-i18n';
import { LangService } from './lang/lang.service';
import { LangModule } from './lang/lang.module';
import { BlogModule } from './blog/blog.module';
import * as path from 'path';

@Module({
  imports: [
    I18nModule.forRoot({
      fallbackLanguage: 'ua',
      loaderOptions: {
        path: path.join(__dirname, '/i18n/'),
        watch: true,
      },
      resolvers: [
        { use: QueryResolver, options: ['lang'] },
        // AcceptLanguageResolver,
      ],
      viewEngine: 'hbs',
    }),
    LangModule,
    BlogModule,
  ],
  controllers: [AppController],
  providers: [AppService, LangService],
  // exports: [AppService],
})
export class AppModule {}
