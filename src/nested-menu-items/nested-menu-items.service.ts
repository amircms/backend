import { Injectable } from '@nestjs/common';
import { CreateNestedMenuItemDto } from './dto/create-nested-menu-item.dto';
import { UpdateNestedMenuItemDto } from './dto/update-nested-menu-item.dto';
import { ParamsDto } from './dto/params.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { NestedMenuItemEntity } from './entities/nested-menu-item.entity';
import { Repository } from 'typeorm';

@Injectable()
export class NestedMenuItemsService {
  constructor(
    @InjectRepository(NestedMenuItemEntity)
    private readonly nestedMenuItemRepository: Repository<NestedMenuItemEntity>,
  ) {}

  async create(dto: CreateNestedMenuItemDto) {
    const newNestedMenuItem = this.nestedMenuItemRepository.create(dto);
    await this.nestedMenuItemRepository.save(newNestedMenuItem);
    return newNestedMenuItem;
  }

  async findAll() {
    return await this.nestedMenuItemRepository.find();
  }

  async findById(id: ParamsDto['id']) {
    return await this.nestedMenuItemRepository.findOneBy({ id });
  }

  async updateById(id: ParamsDto['id'], dto: UpdateNestedMenuItemDto) {
    const existingItem = await this.findById(id);
    if (!existingItem) {
      throw new Error(`NestedMenuItem with id ${id} not found`);
    }
    const updatedItem = this.nestedMenuItemRepository.merge(existingItem, dto);
    await this.nestedMenuItemRepository.save(updatedItem);
    return updatedItem;
  }

  async deleteById(id: ParamsDto['id']) {
    return this.nestedMenuItemRepository.delete(id);
  }
}
