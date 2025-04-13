import { IsEnum, IsObject, IsOptional, IsString } from 'class-validator';
import { PageStatusEnum } from '../../enums';

export class CreatePageDto {
  @IsString()
  title: string;

  @IsString()
  slug: string;

  @IsString()
  content: string;

  @IsOptional()
  @IsObject()
  meta?: Record<string, any>;

  @IsEnum(PageStatusEnum)
  status: PageStatusEnum;
}
