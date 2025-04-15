import {
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsArray,
  ValidateNested,
  IsObject,
} from 'class-validator';
import { PageStatusEnum } from '../../enums';
import { GjsComponent, GjsStyle } from '../../types';

export class CreatePageDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  slug: string;

  @IsOptional()
  @IsString()
  htmlContent?: string;

  @IsOptional()
  @IsString()
  cssContent?: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true }) // اعتبارسنجی تمام اعضای آرایه
  // @IsObject({ each: false }) // اطمینان از اینکه هر عنصر از نوع شیء است
  gjsComponents?: GjsComponent[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true }) // اعتبارسنجی تمام اعضای آرایه
  // @IsObject({ each: false }) // اطمینان از اینکه هر عنصر از نوع شیء است
  gjsStyles?: GjsStyle[];

  @IsOptional()
  @IsObject()
  meta?: Record<string, any>;

  @IsOptional()
  @IsEnum(PageStatusEnum)
  status?: PageStatusEnum;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
