import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateMenuItemDto } from './dto/create-menu-item.dto';
import { UpdateMenuItemDto } from './dto/update-menu-item.dto';
import { ParamsDto } from './dto/params.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MenuItemEntity } from './entities/menu-item.entity';
import { Repository } from 'typeorm';
import { PagesService } from '../pages/pages.service';

@Injectable()
export class MenuItemsService {
  constructor(
    @InjectRepository(MenuItemEntity)
    private readonly menuItemRepository: Repository<MenuItemEntity>,
    private readonly pageService: PagesService,
  ) {}
  async create(dto: CreateMenuItemDto) {
    const item = this.menuItemRepository.create(dto);

    return await this.menuItemRepository.save(item);
  }

  async findAll() {
    return await this.menuItemRepository.find({
      relations: ['page'],
    });
  }

  async findById(id: ParamsDto['id']) {
    const item = await this.menuItemRepository.findOne({
      where: { id },
      relations: ['page'],
    });

    if (!item) {
      throw new HttpException('Menu item not found', HttpStatus.NOT_FOUND);
    }

    return item;
  }
  async updateById(id: ParamsDto['id'], dto: UpdateMenuItemDto) {
    const item = await this.findById(id);

    if (dto.pageSlug) {
      const page = await this.pageService.findBySlug(dto.pageSlug);
      if (!page) {
        throw new HttpException('Page not found', HttpStatus.NOT_FOUND);
      }
      item.page = page;
    }

    Object.assign(item, dto);
    return await this.menuItemRepository.save(item);
  }

  async deleteById(id: ParamsDto['id']) {
    const item = await this.findById(id);
    return await this.menuItemRepository.delete(item.id);
  }
}
