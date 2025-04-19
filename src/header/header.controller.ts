import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { HeaderService } from './header.service';
import { CreateHeaderDto } from './dto/create-header.dto';
import { UpdateHeaderDto } from './dto/update-header.dto';
import { ParamsDto } from './dto/params.dto';

@Controller('header')
export class HeaderController {
  constructor(private readonly headerService: HeaderService) {}

  @Post()
  create(@Body() dto: CreateHeaderDto) {
    return this.headerService.create(dto);
  }

  @Get()
  findAll() {
    return this.headerService.findAll();
  }

  @Get(':id')
  findById(@Param() params: ParamsDto) {
    return this.headerService.findById(params.id);
  }

  @Patch(':id')
  updateById(@Param() params: ParamsDto, @Body() dto: UpdateHeaderDto) {
    return this.headerService.updateById(params.id, dto);
  }

  @Delete(':id')
  deleteById(@Param() params: ParamsDto) {
    return this.headerService.deleteById(params.id);
  }
}
