import { PartialType } from '@nestjs/mapped-types';
import { CreateSettingDto } from './create-setting.dto';
import { IsUUID } from 'class-validator';

export class UpdateSettingDto extends PartialType(CreateSettingDto) {
  @IsUUID()
  id: string;
}
