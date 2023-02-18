import {
  Catch,
  NotFoundException,
  ExceptionFilter,
  ArgumentsHost,
} from '@nestjs/common';

@Catch(NotFoundException)
export class NotFoundExceptionFilter implements ExceptionFilter {
  catch(exception: NotFoundException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const { i18nLang } = ctx.getRequest();
    response.redirect(`/${i18nLang}/not-found/`);
  }
}
