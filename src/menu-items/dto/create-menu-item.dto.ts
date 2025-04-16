import { IsString, IsInt, IsOptional, IsUUID } from 'class-validator';

export class CreateMenuItemDto {
  @IsString()
  title: string;

  @IsOptional()
  @IsInt()
  sortOrder?: number = 0;

  @IsUUID()
  menuItemId: string;

  @IsUUID()
  menuId: string;

  @IsOptional()
  @IsUUID()
  parentId?: string;
}
