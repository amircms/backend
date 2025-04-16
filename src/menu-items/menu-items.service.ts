import { Injectable } from '@nestjs/common';
import { CreateMenuItemDto } from './dto/create-menu-item.dto';
import { UpdateMenuItemDto } from './dto/update-menu-item.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MenuItemEntity } from './entities/menu-item.entity';
import { Repository } from 'typeorm';
import { ParamsDto } from './dto/params.dto';

@Injectable()
export class MenuItemsService {
  constructor(
    @InjectRepository(MenuItemEntity)
    private readonly menuItemRepository: Repository<MenuItemEntity>,
  ) {}

  async create(dto: CreateMenuItemDto) {
    const newMenuItem = this.menuItemRepository.create(dto);
    await this.menuItemRepository.save(newMenuItem);
    return newMenuItem;
  }

  async findAll() {
    return await this.menuItemRepository.find();
  }

  async findById(id: ParamsDto['id']) {
    return await this.menuItemRepository.findOneBy({ id });
  }

  async updateById(id: ParamsDto['id'], dto: UpdateMenuItemDto) {
    const existingItem = await this.findById(id);
    if (!existingItem) {
      throw new Error(`MenuItem with id ${id} not found`);
    }
    const updatedItem = this.menuItemRepository.merge(existingItem, dto);
    await this.menuItemRepository.save(updatedItem);
    return updatedItem;
  }

  async deleteById(id: ParamsDto['id']) {
    return this.menuItemRepository.delete(id);
  }
}
