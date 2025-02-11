import { Module } from '@nestjs/common';
import { SettingService } from './setting.service';
import { SettingController } from './setting.controller';
import { SettingRepository } from './setting.repository';

@Module({
  controllers: [SettingController],
  providers: [SettingService, SettingRepository],
})
export class SettingModule {}
