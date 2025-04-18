import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePageDto } from './dto/create-page.dto';
import { UpdatePageDto } from './dto/update-page.dto';
import { ParamsDto } from './dto/params.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PageEntity } from './entities/page.entity';
import { Repository } from 'typeorm';
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

  async findAll(): Promise<PageEntity[]> {
    return this.pageRepository.find();
  }

  async findForTable({
    page = 1,
    inPage = 10,
    status,
    searchTerm,
  }: {
    page: number;
    inPage: number;
    status?: PageStatusEnum;
    searchTerm?: string;
  }): Promise<{ data: PageEntity[]; total: number }> {
    const where: any = {};

    if (status) {
      where.status = status;
    }

    if (searchTerm) {
      where.title = searchTerm;
    }

    const [data, total] = await this.pageRepository.findAndCount({
      where,
      take: inPage,
      skip: (page - 1) * inPage,
      order: {
        createdAt: 'DESC',
      },
    });

    return { data, total };
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

  async changeStatus(id: ParamsDto['id']) {
    const page = await this.findById(id);
    return await this.pageRepository.save(page);
  }
}
