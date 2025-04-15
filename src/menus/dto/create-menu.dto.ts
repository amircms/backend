import {
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  ValidateNested,
} from 'class-validator';
import { MenuItemEntity } from '../../menu-items/entities/menu-item.entity';
import { Type } from 'class-transformer';

export class CreateNestedMenuItemDto {
  @IsOptional()
  @IsNumber()
  @IsInt()
  sortOrder?: number;

  @IsString()
  title: string;

  @IsString()
  @IsUUID()
  menuItemId: MenuItemEntity['id'];

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreateNestedMenuItemDto)
  children?: CreateNestedMenuItemDto[];
}

export class CreateMenuDto {
  @IsString()
  title: string;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreateNestedMenuItemDto)
  items?: CreateNestedMenuItemDto[];
}
