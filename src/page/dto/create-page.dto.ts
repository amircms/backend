import { IsOptional, IsString } from 'class-validator';

export class CreatePageDto {
  @IsString()
  label: string;

  @IsString()
  slug: string;

  @IsOptional()
  @IsString()
  parentId?: string;

  @IsString()
  content: string;
}
