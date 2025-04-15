import {
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { MenuItemEntity } from '../../menu-items/entities/menu-item.entity';
import { Type } from 'class-transformer';

export class CreateNestedMenuItemDto extends MenuItemEntity {
  @IsOptional()
  @IsNumber()
  @IsInt()
  sortOrder?: number;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreateNestedMenuItemDto) // یا UpdateNestedMenuItemD
  children?: CreateNestedMenuItemDto[];
}

export class CreateMenuDto {
  @IsString()
  title: string;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreateNestedMenuItemDto) // یا UpdateNestedMenuItemDto
  items?: CreateNestedMenuItemDto[];
}
