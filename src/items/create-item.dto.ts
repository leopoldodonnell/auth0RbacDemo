import { IsString, IsInt, IsUrl, IsNumber, IsCurrency } from 'class-validator';
import { Item } from './item.interface';

export class CreateItemDto {
  @IsNumber() id: number;

  @IsString() readonly name: string;

  @IsNumber() readonly price: number;

  @IsUrl() readonly image: string;
}
