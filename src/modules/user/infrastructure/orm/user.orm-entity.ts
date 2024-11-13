import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users-nestjs')
export class UserOrmEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  email: string;

  @Column({ nullable: false })
  password: string;
}
