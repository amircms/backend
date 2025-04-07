import { Injectable } from '@nestjs/common';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { ParamsDto } from './dto/params.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MenuEntity } from './entities/menu.entity';
import { MenuRepository } from './menu.repository';
import { omit } from 'lodash';
import { UpdateOrdersMenuDto } from './dto/update-orders-menu.dto';

@Injectable()
export class MenuService {
  constructor(
    @InjectRepository(MenuEntity)
    private readonly menuRepository: MenuRepository,
  ) {}

  async create(createMenuDto: CreateMenuDto) {
    try {
      const initMenu = this.menuRepository.create(createMenuDto);
      const savedMenu = await this.menuRepository.save(initMenu);
      return omit(savedMenu, ['parent', 'children']);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async findAll() {
    return await this.menuRepository.find({
      order: {
        order: 'ASC',
      },
    });
  }

  async findOneById(id: ParamsDto['id']) {
    return await this.menuRepository.findOneBy({ id });
  }
  async findOneBySlug(slug: CreateMenuDto['slug']) {
    return await this.menuRepository.findOneBy({ slug });
  }

  async updateById(id: ParamsDto['id'], updateMenuDto: UpdateMenuDto) {
    return await this.menuRepository.update(id, updateMenuDto);
  }

  async updateOrders(orders: UpdateOrdersMenuDto['orders']) {
    const list = orders.sort((a, b) => a.order - b.order);
    const cases = list.map((item) => ({
      id: item.id,
      order: item.order,
    }));

    await this.menuRepository
      .createQueryBuilder()
      .update(MenuEntity)
      .set({
        order: () =>
          `CASE ${cases
            .map((item) => `WHEN id = '${item.id}' THEN ${item.order}`)
            .join(' ')} ELSE order END`,
      })
      .whereInIds(cases.map((item) => item.id))
      .execute();
  }
  async deleteById(id: ParamsDto['id']) {
    return await this.menuRepository.delete(id);
  }
}
