import {
  WinstonModule,
  utilities as nestWinstonModuleUtilities,
} from 'nest-winston';
import * as winston from 'winston';

export const winstonConfig = {
  imports: [
    WinstonModule.forRoot({
      transports: [
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.ms(),
            winston.format.colorize(),
            nestWinstonModuleUtilities.format.nestLike('YourApp', {
              prettyPrint: true,
              colors: true,
            }),
          ),
          level: 'debug', // This ensures all log levels are shown
        }),
      ],
    }),
  ],
};
