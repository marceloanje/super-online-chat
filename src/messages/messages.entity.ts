import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from 'src/user/user.entity';

@Entity('messages')
export class Message {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  content: string;

  @Column()
  createdAt: Date;

  @Column({ name: 'sender_id' })
  senderId: string;

  @Column()
  chatRoomId: string;

  @ManyToOne(() => User, (user) => user.messages)
  @JoinColumn({ name: 'sender_id', referencedColumnName: 'id' })
  user: User;
}
