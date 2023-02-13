import { Request } from 'express';

export interface IRequest extends Request {
  i18nLang: string;
}
