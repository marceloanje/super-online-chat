import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Message } from './messages.entity';
import { Repository } from 'typeorm';
import { CreateMessageDto } from './dto/create-message.dto';

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

  async create(createMessageDto: CreateMessageDto): Promise<Message> {
    return await this.messageRepository.save(createMessageDto);
  }
}
