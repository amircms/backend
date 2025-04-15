import { Module } from '@nestjs/common';
import { MenusService } from './menus.service';
import { MenusController } from './menus.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MenuEntity } from './entities/menu.entity';
import { NestedMenuItemEntity } from './entities/nested-menu-item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MenuEntity, NestedMenuItemEntity])],
  controllers: [MenusController],
  providers: [MenusService],
  exports: [MenusService],
})
export class MenusModule {}
