import { IsEnum, IsObject, IsOptional, IsString } from 'class-validator';
import { PageStatusEnum } from '../../enums';

export class CreatePageDto {
  @IsString()
  title: string;

  @IsString()
  slug: string;

  @IsOptional()
  @IsString()
  content?: string;

  @IsOptional()
  @IsObject()
  meta?: Record<string, any>;

  @IsOptional()
  @IsEnum(PageStatusEnum)
  status: PageStatusEnum;
}
