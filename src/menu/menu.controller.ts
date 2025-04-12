import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MenuService } from './menu.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { ParamsDto } from './dto/params.dto';
import { ResponseService } from '../response/response.service';
import { UpdateOrdersMenuDto } from './dto/update-orders-menu.dto';

@Controller('menus')
export class MenuController {
  constructor(
    private readonly menuService: MenuService,
    private readonly responseService: ResponseService,
  ) {}

  @Post()
  async create(@Body() createMenuDto: CreateMenuDto) {
    const res = await this.menuService.create(createMenuDto);
    return this.responseService.create('Menu', res.id);
  }

  @Get()
  async findAll() {
    const res = await this.menuService.findAll();
    return this.responseService.findList('Menu', res);
  }

  @Get(':id')
  async findOneById(@Param() params: ParamsDto) {
    const res = await this.menuService.findOneById(params.id);
    return this.responseService.findOne('id', res);
  }

  @Patch(':id')
  async updateById(
    @Param() params: ParamsDto,
    @Body() updateMenuDto: UpdateMenuDto,
  ) {
    await this.menuService.updateById(params.id, updateMenuDto);
    return this.responseService.updateOne('id', updateMenuDto.id);
  }

  @Get('findParents/:id')
  async findParentsPagesById(@Param() params: ParamsDto) {
    const res = await this.menuService.findParentsMenusById(params.id);
    return this.responseService.findList('Menu', res);
  }

  @Patch('order')
  async updateOrders(@Body() dto: UpdateOrdersMenuDto) {
    await this.menuService.updateOrders(dto.orders);
    return this.responseService.updateList('orders');
  }

  @Delete(':id')
  async deleteById(@Param() params: ParamsDto) {
    await this.menuService.deleteById(params.id);
    return this.responseService.deleteOne('id', params.id);
  }
}
