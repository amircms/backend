import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ParamsDto } from './dto/params.dto';
import { UserRepository } from './user.repository';
import { omit } from 'lodash';

@Injectable()
export class UserService {
  constructor(private readonly userRepo: UserRepository) {}
  async createUser(dto: CreateUserDto) {
    const initUser = this.userRepo.create(dto);
    return await this.userRepo.save(initUser);
  }

  async findAllUsers() {
    return this.userRepo.find();
  }

  async findUserById(id: ParamsDto['id']) {
    return this.userRepo.findOneBy({ id });
  }

  async updateUserById(dto: UpdateUserDto) {
    const { id } = dto;
    const obj = omit(dto, ['id']);
    return await this.userRepo.update(id, obj);
  }

  async deleteUserById(id: ParamsDto['id']) {
    return await this.userRepo.delete(id);
  }
}
