import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePageDto } from './dto/create-page.dto';
import { UpdatePageDto } from './dto/update-page.dto';
import { ParamsDto } from './dto/params.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PageEntity } from './entities/page.entity';
import { ILike, Repository } from 'typeorm';
import { PageStatusEnum } from '../enums';

@Injectable()
export class PagesService {
  constructor(
    @InjectRepository(PageEntity)
    private readonly pageRepository: Repository<PageEntity>,
  ) {}
  async create(dto: CreatePageDto) {
    dto.slug = dto.slug.toLowerCase();

    const existingPage = await this.pageRepository.findOneBy({
      slug: dto.slug,
    });

    if (existingPage?.id) {
      throw new HttpException('Slug already used', HttpStatus.BAD_REQUEST);
    }

    const initPage = this.pageRepository.create(dto);
    return await this.pageRepository.save(initPage);
  }

  async findAll(query?: {
    status?: PageStatusEnum;
    search?: string;
    skip?: number;
    take?: number;
    order?: 'ASC' | 'DESC';
  }) {
    const { status, search, skip = 0, take = 20, order = 'DESC' } = query || {};

    const where: any = {};
    if (status) where.status = status;
    if (search) {
      where.title = ILike(`%${search}%`);
    }

    return await this.pageRepository.find({
      where,
      skip,
      take,
      order: { createdAt: order },
    });
  }

  async findById(id: ParamsDto['id']) {
    const page = await this.pageRepository.findOneBy({ id });
    if (!page) {
      throw new HttpException('Page not found', HttpStatus.NOT_FOUND);
    }
    return page;
  }

  async findBySlug(slug: CreatePageDto['slug']) {
    return await this.pageRepository.findOneBy({ slug });
  }

  async updateById(id: ParamsDto['id'], dto: UpdatePageDto) {
    const page = await this.findById(id);
    const merged = this.pageRepository.merge(page, dto);
    return await this.pageRepository.save(merged);
  }

  async deleteById(id: ParamsDto['id']) {
    await this.findById(id);
    return await this.pageRepository.delete(id);
  }

  async changeStatus(id: ParamsDto['id'], status: PageStatusEnum) {
    const page = await this.findById(id);
    page.status = status;
    return await this.pageRepository.save(page);
  }
}
