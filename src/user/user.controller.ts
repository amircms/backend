import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ParamsDto } from './dto/params.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  createUser(@Body() dto: CreateUserDto) {
    return this.userService.createUser(dto);
  }

  @Get()
  findAllUsers() {
    return this.userService.findAllUsers();
  }

  @Get(':id')
  findUserById(@Param() params: ParamsDto) {
    return this.userService.findUserById(params.id);
  }

  @Patch(':id')
  updateUserById(@Body() dto: UpdateUserDto) {
    return this.userService.updateUserById(dto);
  }

  @Delete(':id')
  deleteUserById(@Param() params: ParamsDto) {
    return this.userService.deleteUserById(params.id);
  }
}
