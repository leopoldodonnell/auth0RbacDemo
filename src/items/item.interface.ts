import { IsString, IsInt, IsUrl } from 'class-validator';

export class Item {
  id: number;
  @IsString() readonly name: string;

  @IsInt() readonly price: number;

  @IsUrl() readonly image: string;
}
