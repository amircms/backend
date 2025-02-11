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

@Controller('pages')
export class PageController {
  constructor(private readonly pageService: PageService) {}

  @Post()
  async createPage(@Body() createPageDto: CreatePageDto) {
    return await this.pageService.createPage(createPageDto);
  }

  @Get()
  async findAllPages() {
    return await this.pageService.findAllPages();
  }

  @Get(':id')
  async findPageById(@Param() params: ParamsDto) {
    return await this.pageService.findPageById(params.id);
  }

  @Get('slug/:menuSlug')
  async findPageByMenuSlug(
    @Param('menuSlug') menuSlug: CreatePageDto['menuSlug'],
  ) {
    return await this.pageService.findPageByMenuSlug(menuSlug);
  }

  @Patch()
  async updatePageById(@Body() updatePageDto: UpdatePageDto) {
    return await this.pageService.updatePageById(updatePageDto);
  }

  @Delete(':id')
  async deletePageById(@Param() params: ParamsDto) {
    return await this.pageService.deletePageById(params.id);
  }
}
