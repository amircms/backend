import {
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  Matches,
} from 'class-validator';

export class CreateMenuDto {
  @IsString()
  label: string;

  @IsString()
  @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
    message:
      'slug must be in kebab-case format (lowercase letters, numbers and hyphens)',
  })
  slug: string;

  @IsOptional()
  @IsUUID()
  parentId: string | null;

  @IsOptional()
  @IsNumber()
  order: number;
}
