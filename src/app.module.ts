import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { I18nModule } from 'nestjs-i18n';
import { PathResolver } from '@/settings/PathResolver';
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
      resolvers: [{ use: PathResolver, options: ['lang'] }],
      viewEngine: 'hbs',
    }),
    LangModule,
    BlogModule,
  ],
  controllers: [AppController],
  providers: [AppService, LangService],
})
export class AppModule {}
