import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Message } from './messages.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MessagesService {
  constructor(
    @InjectRepository(Message)
    private messageRepository: Repository<Message>,
  ) {}

  async getMessagesByChatRoomId(chatRoomId: string): Promise<Message[]> {
    return this.messageRepository.find({
      where: { chatRoomId },
      order: { createdAt: 'ASC' },
    });
  }
}
