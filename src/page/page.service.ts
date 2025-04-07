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
    const usedMenu = await this.findPageByMenuSlug(createPageDto.menuSlug);
    if (usedMenu?.id) {
      throw new HttpException('Menu already used', HttpStatus.BAD_REQUEST);
    }
    const initPage = this.pageRepository.create(createPageDto);
    const savedPage = await this.pageRepository.save(initPage);
    return savedPage;
  }

  async findAllPages() {
    return await this.pageRepository.find();
  }

  async findPageById(id: ParamsDto['id']) {
    return await this.pageRepository.findOneBy({ id });
  }
  async findPageByMenuSlug(menuSlug: CreatePageDto['menuSlug']) {
    return await this.pageRepository.findOneBy({ menuSlug });
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
