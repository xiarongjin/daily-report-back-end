import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// 这里可以修改表名
// @Entity()
// export class Message extends BaseEntity {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column('int', { name: 'user_id' })
//   userId: number;
// }

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column('int', { name: 'user_id' })
  userId: number;

  @Column('text', { name: 'pass_word' })
  passWord: string;

  @Column('text', { name: 'email_address' })
  userEmail: string;
}

export const entities = [User];
