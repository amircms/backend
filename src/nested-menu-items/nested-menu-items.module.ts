import { Module } from '@nestjs/common';
import { NestedMenuItemsService } from './nested-menu-items.service';
import { NestedMenuItemsController } from './nested-menu-items.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NestedMenuItemEntity } from './entities/nested-menu-item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([NestedMenuItemEntity])],
  controllers: [NestedMenuItemsController],
  providers: [NestedMenuItemsService],
})
export class NestedMenuItemsModule {}
