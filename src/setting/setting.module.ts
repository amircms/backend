import { Module } from '@nestjs/common';
import { SettingService } from './setting.service';
import { SettingController } from './setting.controller';
import { SettingRepository } from './setting.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SettingEntity } from './entities/setting.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SettingEntity])],
  controllers: [SettingController],
  providers: [SettingService, SettingRepository],
})
export class SettingModule {}
