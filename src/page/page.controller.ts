import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PageService } from './page.service';
import { CreatePageDto } from './dto/create-page.dto';
import { UpdatePageDto } from './dto/update-page.dto';
import { ParamsDto } from './dto/params.dto';
import { ResponseService } from '../response/response.service';

@Controller('pages')
export class PageController {
  constructor(
    private readonly pageService: PageService,
    private readonly responseService: ResponseService,
  ) {}

  @Post()
  async createPage(@Body() dto: CreatePageDto) {
    const res = await this.pageService.createPage(dto);
    return this.responseService.create('Page', res.id);
  }

  @Get()
  async findAllPages() {
    const res = await this.pageService.findAllPages();
    return this.responseService.findList('Menu', res);
  }
  @Get('findParents/:id')
  async findParentsPagesById(@Param() params: ParamsDto) {
    const res = await this.pageService.findParentsPagesById(params.id);
    return this.responseService.findList('Menu', res);
  }

  @Get(':id')
  async findPageById(@Param() params: ParamsDto) {
    const res = await this.pageService.findPageById(params.id);
    return this.responseService.findOne('id', res);
  }

  @Get('slug/:slug')
  async findPageByMenuSlug(@Param('menuSlug') slug: CreatePageDto['slug']) {
    const res = await this.pageService.findPageBySlug(slug);
    return this.responseService.findOne('slug', res);
  }

  @Patch()
  async updatePageById(@Body() dto: UpdatePageDto) {
    await this.pageService.updatePageById(dto);
    return this.responseService.updateOne('id', dto.id);
  }

  @Delete(':id')
  async deletePageById(@Param() params: ParamsDto) {
    await this.pageService.deletePageById(params.id);
    return this.responseService.deleteOne('id', params.id);
  }
}
