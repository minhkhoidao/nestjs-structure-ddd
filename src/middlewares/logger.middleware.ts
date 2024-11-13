import { Injectable, NestMiddleware, Logger } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private readonly logger = new Logger('HTTP');

  use(req: Request, res: Response, next: NextFunction) {
    const { method, originalUrl, body, query, params } = req;

    this.logger.log(
      `[Request] ${method} ${originalUrl} 
      Body: ${JSON.stringify(body)}
      Query: ${JSON.stringify(query)}
      Params: ${JSON.stringify(params)}`,
    );

    next();
  }
}
