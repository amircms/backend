import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FooterService } from './footer.service';
import { CreateFooterDto } from './dto/create-footer.dto';
import { UpdateFooterDto } from './dto/update-footer.dto';
import { ParamsDto } from './dto/params.dto';

@Controller('footer')
export class FooterController {
  constructor(private readonly footerService: FooterService) {}

  @Post()
  create(@Body() dto: CreateFooterDto) {
    return this.footerService.create(dto);
  }

  @Get()
  findAll() {
    return this.footerService.findAll();
  }

  @Get(':id')
  findById(@Param() params: ParamsDto) {
    return this.footerService.findById(params.id);
  }

  @Patch(':id')
  updateById(@Param() params: ParamsDto, @Body() dto: UpdateFooterDto) {
    return this.footerService.updateById(params.id, dto);
  }

  @Delete(':id')
  deleteById(@Param() params: ParamsDto) {
    return this.footerService.deleteById(params.id);
  }
}
