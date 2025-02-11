import { IsArray, ValidateNested, IsUUID, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateOrderItemDto {
  @IsUUID()
  id: string;

  @IsNumber()
  order: number;
}

export class UpdateOrdersMenuDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UpdateOrderItemDto)
  orders: UpdateOrderItemDto[];
}
