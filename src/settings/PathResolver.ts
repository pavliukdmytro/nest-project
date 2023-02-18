import { I18nResolver } from 'nestjs-i18n';
import { ExecutionContext } from '@nestjs/common';
import { I18nResolverOptions } from 'nestjs-i18n';

export class PathResolver implements I18nResolver {
  constructor(@I18nResolverOptions() private keys: string[] = []) {}
  async resolve(context: ExecutionContext) {
    let req: any;

    switch (context.getType() as string) {
      case 'http':
        req = context.switchToHttp().getRequest();
        break;
      case 'graphql':
        [, , { req }] = context.getArgs();
        break;
    }

    let lang = 'ua';

    if (req) {
      for (const key of this.keys) {
        if (req?.originalUrl) {
          lang = req.originalUrl?.match(/^\/\w\w\//)?.[0].replace(/\//g, '');
          break;
        }
      }
    }
    console.log(lang);
    return lang;
  }
}
