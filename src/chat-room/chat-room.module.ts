import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatRoom } from './chat-room.entity';
import { ChatRoomsService } from './chat-room.service';
import { ChatRoomsController } from './chat-room.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ChatRoom])],
  providers: [ChatRoomsService],
  controllers: [ChatRoomsController],
})
export class ChatRoomModule {}
