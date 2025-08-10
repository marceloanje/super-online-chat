import { Controller, Post, Get, Param } from '@nestjs/common';
import { ChatRoom } from './chat-room.entity';
import { ChatRoomsService } from './chat-room.service';

@Controller('chat-rooms')
export class ChatRoomsController {
  constructor(private chatRoomsService: ChatRoomsService) {}

  @Get(':key')
  async findOne(@Param('key') key: string): Promise<ChatRoom | null> {
    return this.chatRoomsService.findOne(key);
  }

  @Post()
  async create(): Promise<ChatRoom> {
    return this.chatRoomsService.create();
  }
}
