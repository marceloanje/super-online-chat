import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('chat_rooms')
export class ChatRoom {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  key: string;
}
