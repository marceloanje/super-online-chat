import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatRoom } from './chat-room.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ChatRoom])],
})
export class ChatRoomModule {}
