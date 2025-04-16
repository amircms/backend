import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MenusService } from './menus.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { ParamsDto } from './dto/params.dto';

@Controller('menus')
export class MenusController {
  constructor(private readonly menusService: MenusService) {}

  @Post()
  create(@Body() dto: CreateMenuDto) {
    return this.menusService.create(dto);
  }

  @Get()
  findAll() {
    return this.menusService.findAll();
  }

  @Get(':id')
  findById(@Param() params: ParamsDto) {
    return this.menusService.findById(params.id);
  }

  @Patch(':id')
  updateById(@Param() params: ParamsDto, @Body() dto: UpdateMenuDto) {
    console.log('🚀 ~ MenusController ~ updateById ~ params:', params);
    return this.menusService.updateById(params.id, dto);
  }

  @Delete(':id')
  deleteById(@Param() params: ParamsDto) {
    return this.menusService.deleteById(params.id);
  }
}
