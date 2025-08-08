import { Message } from 'src/messages/messages.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 20 })
  phoneNumber: string;

  @OneToMany(() => Message, (message) => message.user)
  messages: Message[];
}
