import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { NestedMenuItemsService } from './nested-menu-items.service';
import { CreateNestedMenuItemDto } from './dto/create-nested-menu-item.dto';
import { UpdateNestedMenuItemDto } from './dto/update-nested-menu-item.dto';
import { ParamsDto } from './dto/params.dto';

@Controller('nested-menu-items')
export class NestedMenuItemsController {
  constructor(
    private readonly nestedMenuItemsService: NestedMenuItemsService,
  ) {}

  @Post()
  create(@Body() createNestedMenuItemDto: CreateNestedMenuItemDto) {
    return this.nestedMenuItemsService.create(createNestedMenuItemDto);
  }

  @Get()
  findAll() {
    return this.nestedMenuItemsService.findAll();
  }

  @Get(':id')
  findOne(@Param() params: ParamsDto) {
    return this.nestedMenuItemsService.findById(params.id);
  }

  @Patch(':id')
  update(@Param() params: ParamsDto, @Body() dto: UpdateNestedMenuItemDto) {
    return this.nestedMenuItemsService.updateById(params.id, dto);
  }

  @Delete(':id')
  remove(@Param() params: ParamsDto) {
    return this.nestedMenuItemsService.deleteById(params.id);
  }
}
