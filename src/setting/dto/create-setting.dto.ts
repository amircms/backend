import { IsHexColor, IsString } from 'class-validator';
import { IsHTML } from '../../utils/IsHTML-class-validator-decorator';

export class CreateSettingDto {
  @IsString()
  @IsHTML()
  header: string;

  @IsString()
  @IsHTML()
  footer: string;

  @IsString()
  logo: string;

  @IsString()
  websiteName: string;

  @IsString()
  @IsHexColor()
  primaryColor: string;
}
