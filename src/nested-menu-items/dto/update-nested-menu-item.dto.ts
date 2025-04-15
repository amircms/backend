import { PartialType } from '@nestjs/mapped-types';
import { CreateNestedMenuItemDto } from './create-nested-menu-item.dto';

export class UpdateNestedMenuItemDto extends PartialType(
  CreateNestedMenuItemDto,
) {}
