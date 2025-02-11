import { Injectable } from '@nestjs/common';
import { PageEntity } from './entities/page.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PageRepository extends Repository<PageEntity> {}
