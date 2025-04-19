import { Injectable } from '@nestjs/common';
import { CreateHeaderDto } from './dto/create-header.dto';
import { UpdateHeaderDto } from './dto/update-header.dto';
import { ParamsDto } from './dto/params.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { HeaderEntity } from './entities/header.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HeaderService {
  constructor(
    @InjectRepository(HeaderEntity)
    private readonly headerRepository: Repository<HeaderEntity>,
  ) {}
  async create(dto: CreateHeaderDto) {
    const header = this.headerRepository.create(dto);
    return await this.headerRepository.save(header);
  }

  async findAll() {
    return this.headerRepository.find();
  }

  async findById(id: ParamsDto['id']) {
    return this.headerRepository.findOneBy({ id });
  }

  async updateById(id: ParamsDto['id'], dto: UpdateHeaderDto) {
    return await this.headerRepository.update(id, dto);
  }

  async deleteById(id: ParamsDto['id']) {
    return await this.headerRepository.delete(id);
  }
}
