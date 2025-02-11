import { IsString } from 'class-validator';
import { IsKebabCase } from '../../utils/isKebabCase-class-validator-decorator';

export class CreateMenuDto {
  @IsString()
  label: string;

  @IsString()
  @IsKebabCase()
  slug: string;
}
