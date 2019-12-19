import { Injectable, Logger } from '@nestjs/common';
import { CreateItemDto } from './create-item.dto';
import { Item } from './item.interface';

@Injectable()
export class ItemsService {
  private readonly items: Item[] = [];
  private idx: number = 0;

  findAll(): Item[] {
    if (this.items.length > 0) {
      Logger.log(`item[0] = ${JSON.stringify(this.items[0])}`);
    }
    return this.items;
  }

  create(item: Item) {
    this.idx += 1;
    item.id = this.idx;
    this.items.push(item);
    Logger.log(`item[0] = ${JSON.stringify(this.items[0])}`);
  }

  update(item: Item) {}

  delete(id: number) {}
}
