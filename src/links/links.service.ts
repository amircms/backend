import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateLinkDto } from './dto/create-link.dto';
import { UpdateLinkDto } from './dto/update-link.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PagesService } from '../pages/pages.service';
import { LinkEntity } from './entities/link.entity';
import { Repository } from 'typeorm';
import { ParamsDto } from './dto/params.dto';

@Injectable()
export class LinksService {
  constructor(
    @InjectRepository(LinkEntity)
    private readonly menuItemRepository: Repository<LinkEntity>,
    private readonly pageService: PagesService,
  ) {}
  async create(dto: CreateLinkDto) {
    const item = this.menuItemRepository.create(dto);

    return await this.menuItemRepository.save(item);
  }

  async findAll() {
    return await this.menuItemRepository.find();
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
  async updateById(id: ParamsDto['id'], dto: UpdateLinkDto) {
    const item = await this.findById(id);

    if (dto.pageId) {
      const page = await this.pageService.findBySlug(dto.pageId);
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
