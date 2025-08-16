import { Body, Controller, Param, Post, Get } from '@nestjs/common';
import { UsersService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get(':phoneNumber')
  async getUserByPhoneNumber(
    @Param('phoneNumber') phoneNumber: string,
  ): Promise<User | null> {
    return this.usersService.getUserByPhoneNumber(phoneNumber);
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.create(createUserDto);
  }
}
