import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SettingService } from './setting.service';
import { CreateSettingDto } from './dto/create-setting.dto';
import { UpdateSettingDto } from './dto/update-setting.dto';
import { ParamsDto } from './dto/params.dto';

@Controller('setting')
export class SettingController {
  constructor(private readonly settingService: SettingService) {}

  @Post()
  createSetting(@Body() dto: CreateSettingDto) {
    return this.settingService.createSetting(dto);
  }

  @Get()
  findAllSettings() {
    return this.settingService.findAllSettings();
  }

  @Get(':id')
  findSettingById(@Param() params: ParamsDto) {
    return this.settingService.findSettingById(params.id);
  }

  @Patch(':id')
  updateSettingById(@Body() updateSettingDto: UpdateSettingDto) {
    return this.settingService.updateSettingById(updateSettingDto);
  }

  @Delete(':id')
  deleteSettingById(@Param() params: ParamsDto) {
    return this.settingService.deleteSettingById(params.id);
  }
}
