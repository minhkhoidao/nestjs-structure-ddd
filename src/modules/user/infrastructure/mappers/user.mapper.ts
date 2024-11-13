import { User } from '../../domain/entities/user.entity';
import { UserOrmEntity } from '../orm/user.orm-entity';

export class UserMapper {
  static toDomain(ormEntity: UserOrmEntity): User {
    return new User(ormEntity.id, ormEntity.email, ormEntity.password);
  }

  static toOrm(domain: User): UserOrmEntity {
    const ormEntity = new UserOrmEntity();
    ormEntity.id = domain.id;
    ormEntity.email = domain.email;
    ormEntity.password = domain.password;
    return ormEntity;
  }
}
