import { Injectable } from '@nestjs/common';
import { MenuEntity } from './entities/menu.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MenuRepository extends Repository<MenuEntity> {
  createOne(entity: Partial<MenuEntity>): Promise<MenuEntity> {
    const menu = this.create(entity);
    return this.save(menu);
  }
}
