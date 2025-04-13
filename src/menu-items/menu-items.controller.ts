import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MenuItemsService } from './menu-items.service';
import { CreateMenuItemDto } from './dto/create-menu-item.dto';
import { UpdateMenuItemDto } from './dto/update-menu-item.dto';
import { ParamsDto } from './dto/params.dto';

@Controller('menu-items')
export class MenuItemsController {
  constructor(private readonly menuItemsService: MenuItemsService) {}

  @Post()
  create(@Body() createMenuItemDto: CreateMenuItemDto) {
    return this.menuItemsService.create(createMenuItemDto);
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
  updateById(@Param() params: ParamsDto, @Body() dto: UpdateMenuItemDto) {
    return this.menuItemsService.updateById(params.id, dto);
  }

  @Delete(':id')
  deleteById(@Param() params: ParamsDto) {
    return this.menuItemsService.deleteById(params.id);
  }
}
