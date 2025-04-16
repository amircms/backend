import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LinksService } from './links.service';
import { CreateLinkDto } from './dto/create-link.dto';
import { UpdateLinkDto } from './dto/update-link.dto';
import { ParamsDto } from './dto/params.dto';

@Controller('links')
export class LinksController {
  constructor(private readonly menuItemsService: LinksService) {}

  @Post()
  create(@Body() createLinkItemDto: CreateLinkDto) {
    return this.menuItemsService.create(createLinkItemDto);
  }

  @Get()
  findAll() {
    return this.menuItemsService.findAll();
  }

  @Get(':id')
  findById(@Param() params: ParamsDto) {
    return this.menuItemsService.findById(params.id);
  }

  @Patch(':id')
  updateById(@Param() params: ParamsDto, @Body() dto: UpdateLinkDto) {
    return this.menuItemsService.updateById(params.id, dto);
  }

  @Delete(':id')
  deleteById(@Param() params: ParamsDto) {
    return this.menuItemsService.deleteById(params.id);
  }
}
