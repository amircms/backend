import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { ParamsDto } from './dto/params.dto';
import { Repository } from 'typeorm';
import { MenuEntity } from './entities/menu.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MenusService {
  constructor(
    @InjectRepository(MenuEntity)
    private readonly menuRepository: Repository<MenuEntity>,
  ) {}
  async create(dto: CreateMenuDto) {
    const exists = await this.menuRepository.findOneBy({ title: dto.title });

    if (exists) {
      throw new HttpException(
        'Menu with this title already exists',
        HttpStatus.BAD_REQUEST,
      );
    }

    const menu = this.menuRepository.create(dto);
    console.log('🚀 ~ MenusService ~ create ~ menu:', menu);
    return await this.menuRepository.save(menu);
  }

  async findAll() {
    return await this.menuRepository.find({
      relations: ['items', 'items.children'],
    });
  }

  async findById(id: ParamsDto['id']) {
    const menu = await this.menuRepository.findOne({
      where: { id },
      relations: ['items', 'items.page'],
    });

    if (!menu) {
      throw new HttpException('Menu not found', HttpStatus.NOT_FOUND);
    }

    return menu;
  }

  async updateById(id: ParamsDto['id'], dto: UpdateMenuDto) {
    const menu = await this.findById(id);
    const updated = this.menuRepository.merge(menu, dto);
    return await this.menuRepository.save(updated);
  }

  async deleteById(id: ParamsDto['id']) {
    const menu = await this.findById(id);
    return await this.menuRepository.delete(menu.id);
  }
}
