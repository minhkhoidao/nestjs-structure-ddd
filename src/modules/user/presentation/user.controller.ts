import {
  Body,
  Controller,
  Inject,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { CreateUserDto } from '../application/dtos/create-user.dto';
import { CreateUserUseCase } from '../application/use-cases/create-user.use-case';
import { LoggingInterceptor } from 'src/logging.interceptor';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';

@Controller('users')
@UseInterceptors(LoggingInterceptor)
export class UserController {
  constructor(
    @Inject(WINSTON_MODULE_PROVIDER)
    private readonly logger: Logger,
    private readonly createUserUseCase: CreateUserUseCase,
  ) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    return await this.createUserUseCase.execute(createUserDto);
  }
}
