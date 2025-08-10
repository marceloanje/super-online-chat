import { Injectable } from '@nestjs/common';
import { ChatRoom } from './chat-room.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ChatRoomsService {
  constructor(
    @InjectRepository(ChatRoom)
    private chatRoomRepository: Repository<ChatRoom>,
  ) {}

  async create(): Promise<ChatRoom> {
    const chatRoom = this.chatRoomRepository.create();
    await this.chatRoomRepository.save(chatRoom);

    return chatRoom;
  }
}
