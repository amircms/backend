import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePageDto } from './dto/create-page.dto';
import { UpdatePageDto } from './dto/update-page.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PageEntity } from './entities/page.entity';
import { PageRepository } from './page.repository';
import { ParamsDto } from './dto/params.dto';
import { omit } from 'lodash';

@Injectable()
export class PageService {
  constructor(
    @InjectRepository(PageEntity)
    private readonly pageRepository: PageRepository,
  ) {}
  async createPage(createPageDto: CreatePageDto) {
    const pageWidthUsedSlug = await this.findPageBySlug(createPageDto.slug);
    if (pageWidthUsedSlug?.id) {
      throw new HttpException('Slug already used', HttpStatus.BAD_REQUEST);
    }
    const initPage = this.pageRepository.create(createPageDto);
    const savedPage = await this.pageRepository.save(initPage);
    return savedPage;
  }

  async findAllPages() {
    return await this.pageRepository.find();
  }

  async findParentsPagesById(id: ParamsDto['id']) {
    let parents: PageEntity[] = [];
    if (id) {
      const allPages = await this.pageRepository.find();
      const idsToExclude = new Set<string>();

      const findChildren = (parentId: string) => {
        for (const page of allPages) {
          if (page.parentId === parentId) {
            idsToExclude.add(page.id);
            findChildren(page.id); // recursive
          }
        }
      };

      findChildren(id);
      idsToExclude.add(id); // اگر خود صفحه رو هم بخوای حذف کنی

      parents = allPages.filter((page) => !idsToExclude.has(page.id));
    } else {
      parents = await this.pageRepository.find();
    }
    return parents;
  }

  async findPageById(id: ParamsDto['id']) {
    return await this.pageRepository.findOneBy({ id });
  }
  async findPageBySlug(slug: CreatePageDto['slug']) {
    return await this.pageRepository.findOneBy({ slug });
  }

  async updatePageById(updatePageDto: UpdatePageDto) {
    const { id } = updatePageDto;
    const obj = omit(updatePageDto, ['id']);
    return await this.pageRepository.update(id, obj);
  }

  async deletePageById(id: ParamsDto['id']) {
    return await this.pageRepository.delete(id);
  }
}
