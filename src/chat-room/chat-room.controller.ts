import { Controller, Post } from '@nestjs/common';
import { ChatRoom } from './chat-room.entity';
import { ChatRoomsService } from './chat-room.service';

@Controller('chat-rooms')
export class ChatRoomsController {
  constructor(private chatRoomsService: ChatRoomsService) {}

  @Post()
  async create(): Promise<ChatRoom> {
    return this.chatRoomsService.create();
  }
}
