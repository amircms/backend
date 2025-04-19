import { IsOptional, IsString, IsUUID } from 'class-validator';

export class ParamsDto {
  @IsOptional()
  @IsUUID()
  id: string;

  @IsOptional()
  @IsString()
  slug: string;
}
