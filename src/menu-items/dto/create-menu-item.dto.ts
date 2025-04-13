import {
  IsBoolean,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
  IsUUID,
} from 'class-validator';

export class CreateMenuItemDto {
  @IsString()
  title: string;

  @IsOptional()
  @IsNumber()
  @IsInt()
  order: number;

  @IsOptional()
  @IsString()
  url?: string;

  @IsOptional()
  @IsUUID()
  menuId: string; // برای relation به Menu

  @IsOptional()
  @IsUUID()
  parentId?: string; // برای منوی تو در تو

  @IsOptional()
  @IsString()
  pageSlug?: string; // اگر نمی‌خوای relation بدی، وگرنه pageId بهتره

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
