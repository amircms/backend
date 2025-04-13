import { IsArray, IsOptional, IsString } from 'class-validator';
import { MenuItemEntity } from '../../menu-items/entities/menu-item.entity';

export class CreateMenuDto {
  @IsString()
  title: string;

  @IsOptional()
  @IsArray()
  items?: MenuItemEntity[];
}
