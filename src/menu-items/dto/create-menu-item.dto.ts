import { IsOptional, IsString } from 'class-validator';

export class CreateMenuItemDto {
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  pageId?: string;
}
