import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PagesService } from './pages.service';
import { CreatePageDto } from './dto/create-page.dto';
import { UpdatePageDto } from './dto/update-page.dto';
import { ParamsDto } from './dto/params.dto';
import { ResponseService } from '../response/response.service';

@Controller('pages')
export class PagesController {
  constructor(
    private readonly pagesService: PagesService,
    private readonly responseService: ResponseService,
  ) {}

  @Post()
  async create(@Body() dto: CreatePageDto) {
    const result = await this.pagesService.create(dto);
    return this.responseService.create('Page', result.id);
  }

  @Get()
  async findAll() {
    const result = await this.pagesService.findAll();
    return this.responseService.findList('Page', result);
  }

  @Get(':id')
  async findById(@Param() params: ParamsDto) {
    const result = await this.pagesService.findById(params.id);
    return this.responseService.findOne('Page', result);
  }

  @Patch(':id')
  async updateById(@Param() params: ParamsDto, @Body() dto: UpdatePageDto) {
    await this.pagesService.updateById(params.id, dto);
    return this.responseService.updateOne('Page', params.id);
  }

  @Delete(':id')
  async deleteById(@Param() params: ParamsDto) {
    await this.pagesService.deleteById(params.id);
    return this.responseService.deleteOne('Page', params.id);
  }
}
