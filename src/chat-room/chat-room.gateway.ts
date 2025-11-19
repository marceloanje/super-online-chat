import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { ChatRoomsService } from './chat-room.service';
import { JoinRoomDto } from './dto/join-room.dto';
import { SendMessageDto } from './dto/send-message.dto';
import { MessagesService } from 'src/messages/messages.service';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class ChatRoomGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() server: Server;

  constructor(
    private readonly chatRoomService: ChatRoomsService,
    private readonly messagesService: MessagesService,
  ) {}

  handleConnection(client: Socket) {
    console.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    console.log(`Client disconnected: ${client.id}`);
  }

  @SubscribeMessage('joinRoom')
  async handleJoinRoom(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: JoinRoomDto,
  ) {
    const { roomId, userId } = data;

    await client.join(roomId);

    this.server.to(roomId).emit('userJoined', {
      message: `User ${userId} joined room ${roomId}`,
    });
  }

  @SubscribeMessage('sendMessage')
  async handleSendMessage(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: SendMessageDto,
  ) {
    const { roomId, userId, message } = data;

    await this.messagesService.create({
      chatRoomId: roomId,
      userId,
      content: message,
    });

    this.server.to(roomId).emit('newMessage', {
      userId,
      message,
      roomId,
      timestamp: new Date(),
    });
  }
}
