import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
  UsePipes,
  ValidationPipe,
  Logger,
} from '@nestjs/common';
import { CreateItemDto } from './create-item.dto';
import { ItemsService } from './items.service';
import { Item } from './item.interface';
// import { ValidationPipe } from '../common/validation.pipe';
import { AuthGuard } from '@nestjs/passport';
import { Permissions } from '../auth/permissions.decorator';
import { PermissionsGuard } from '../auth/permissions.guard';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  async findAll(): Promise<Item[]> {
    const items = this.itemsService.findAll();
    return this.itemsService.findAll();
  }

  @UseGuards(AuthGuard('jwt'), PermissionsGuard)
  @Get('/all')
  @Permissions('read:items')
  async findItAll(): Promise<Item[]> {
    return this.itemsService.findAll();
  }

  @UseGuards(AuthGuard('jwt'), PermissionsGuard)
  @Post()
  @Permissions('create:items')
  @UsePipes(new ValidationPipe())
  async create(@Body('item') createItemDto: CreateItemDto) {
    this.itemsService.create(createItemDto);
    Logger.log("Got here");
  }

  @UseGuards(AuthGuard('jwt'), PermissionsGuard)
  @Put()
  @Permissions('update:items')
  update(@Body('item') item: Item) {
    this.itemsService.update(item);
  }

  @UseGuards(AuthGuard('jwt'), PermissionsGuard)
  @Delete(':id')
  @Permissions('delete:items')
  delete(@Param('id') id: number) {
    this.itemsService.delete(id);
  }

  @UseGuards(AuthGuard('jwt'), PermissionsGuard)
  @Get()
  @Permissions('read:items')
  async find(@Param('id') id: number): Promise<Item> {
    const item: Item = this.itemsService.find(id);
    return item;
  }
}
