import { Entity, Column, PrimaryGeneratedColumn, Generated } from 'typeorm';

@Entity('chat_rooms')
export class ChatRoom {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @Generated('uuid')
  key: string;
}
