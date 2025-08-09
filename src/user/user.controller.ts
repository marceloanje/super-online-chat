import { Body, Controller, Param, Post, Get } from '@nestjs/common';
import { UsersService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get(':phoneNumber')
  async findOne(
    @Param('phoneNumber') phoneNumber: string,
  ): Promise<User | null> {
    return this.usersService.findOne(phoneNumber);
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto): User {
    return this.usersService.create(createUserDto);
  }
}
