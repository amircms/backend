import { IsString } from 'class-validator';
import { IsHTML } from '../../utils/IsHTML-class-validator-decorator';

export class CreatePageDto {
  @IsString()
  label: string;

  @IsString()
  menuSlug: string;

  @IsString()
  @IsHTML()
  html: string;
}
