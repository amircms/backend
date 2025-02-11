import { Injectable } from '@nestjs/common';
import { MenuEntity } from './entities/menu.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MenuRepository extends Repository<MenuEntity> {}
