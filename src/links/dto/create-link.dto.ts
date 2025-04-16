import { IsOptional, IsString } from 'class-validator';

export class CreateLinkDto {
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  pageId?: string;
}
