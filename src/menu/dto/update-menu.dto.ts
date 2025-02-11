import { PartialType } from '@nestjs/mapped-types';
import { CreateMenuDto } from './create-menu.dto';
import { IsUUID } from 'class-validator';

export class UpdateMenuDto extends PartialType(CreateMenuDto) {
  @IsUUID()
  id: string;
}
