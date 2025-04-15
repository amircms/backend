import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResponseService } from './response/response.service';
import { PagesModule } from './pages/pages.module';
import { MenuItemsModule } from './menu-items/menu-items.module';
import { MenusModule } from './menus/menus.module';
import { PageEntity } from './pages/entities/page.entity';
import { MenuItemEntity } from './menu-items/entities/menu-item.entity';
import { MenuEntity } from './menus/entities/menu.entity';
import { NestedMenuItemEntity } from './menus/entities/nested-menu-item.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'amircms',
      entities: [PageEntity, MenuItemEntity, MenuEntity, NestedMenuItemEntity],
      synchronize: true,
    }),
    PagesModule,
    MenuItemsModule,
    MenusModule,
  ],
  providers: [ResponseService],
})
export class AppModule {}
