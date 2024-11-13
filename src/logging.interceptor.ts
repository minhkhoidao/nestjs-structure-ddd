import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Inject,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  constructor(
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
  ) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.switchToHttp().getRequest();
    const { method, url, body, query } = req;

    // Log the incoming request
    this.logger.info('Incoming Request', {
      method,
      url,
      body,
      query,
      timestamp: new Date().toISOString(),
    });

    const now = Date.now();

    return next.handle().pipe(
      tap({
        next: (data) => {
          // Log the response
          this.logger.info('Response', {
            method,
            url,
            responseTime: `${Date.now() - now}ms`,
            response: data,
          });
        },
        error: (error) => {
          // Log any errors
          this.logger.error('Error', {
            method,
            url,
            responseTime: `${Date.now() - now}ms`,
            error: error.message,
          });
        },
      }),
    );
  }
}
