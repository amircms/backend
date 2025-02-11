import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { SettingEntity } from './entities/setting.entity';

@Injectable()
export class SettingRepository extends Repository<SettingEntity> {}
