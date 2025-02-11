import { Injectable } from '@nestjs/common';
import { CreateSettingDto } from './dto/create-setting.dto';
import { UpdateSettingDto } from './dto/update-setting.dto';
import { SettingRepository } from './setting.repository';
import { ParamsDto } from './dto/params.dto';
import { omit } from 'lodash';
import { InjectRepository } from '@nestjs/typeorm';
import { SettingEntity } from './entities/setting.entity';

@Injectable()
export class SettingService {
  constructor(
    @InjectRepository(SettingEntity)
    private readonly settingRepository: SettingRepository,
  ) {}
  async createSetting(dto: CreateSettingDto) {
    return await this.settingRepository.create(dto);
  }

  async findAllSettings() {
    return await this.settingRepository.find();
  }

  async findSettingById(id: ParamsDto['id']) {
    return await this.settingRepository.findOneBy({ id });
  }

  async updateSettingById(dto: UpdateSettingDto) {
    const { id } = dto;
    const obj = omit(dto, ['id']);
    return await this.settingRepository.update(id, obj);
  }

  async deleteSettingById(id: ParamsDto['id']) {
    return await this.settingRepository.delete(id);
  }
}
