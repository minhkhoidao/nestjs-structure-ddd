import { Inject, Injectable } from '@nestjs/common';
import { User } from '../../domain/entities/user.entity';
import { UserRepository } from '../../domain/repositories/user.repository';
import { CreateUserDto } from '../dtos/create-user.dto';

@Injectable()
export class CreateUserUseCase {
  constructor(
    @Inject('UserRepository') private readonly userRepository: UserRepository,
  ) {}

  async execute(createUserDto: CreateUserDto) {
    const user = new User(
      createUserDto.id,
      createUserDto.email,
      createUserDto.password,
    );
    await this.userRepository.save(user);
    return user;
  }
}
