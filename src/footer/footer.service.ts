import { Injectable } from '@nestjs/common';
import { CreateFooterDto } from './dto/create-footer.dto';
import { UpdateFooterDto } from './dto/update-footer.dto';
import { ParamsDto } from './dto/params.dto';
import { Repository } from 'typeorm';
import { FooterEntity } from './entities/footer.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class FooterService {
  constructor(
    @InjectRepository(FooterEntity)
    private readonly footerRepository: Repository<FooterEntity>,
  ) {}
  async create(dto: CreateFooterDto) {
    const footer = this.footerRepository.create(dto);
    return await this.footerRepository.save(footer);
  }

  async findAll() {
    return await this.footerRepository.find();
  }

  async findById(id: ParamsDto['id']) {
    return await this.footerRepository.findOneBy({ id });
  }

  async updateById(id: ParamsDto['id'], dto: UpdateFooterDto) {
    return await this.footerRepository.update(id, dto);
  }

  async deleteById(id: ParamsDto['id']) {
    return await this.footerRepository.delete(id);
  }
}
