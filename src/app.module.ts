import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResponseService } from './response/response.service';
import { PagesModule } from './pages/pages.module';
import { MenuItemsModule } from './menu-items/menu-items.module';
import { MenusModule } from './menus/menus.module';
import { PageEntity } from './pages/entities/page.entity';
import { MenuItemEntity } from './menu-items/entities/menu-item.entity';
import { MenuEntity } from './menus/entities/menu.entity';
import { LinksModule } from './links/links.module';
import { LinkEntity } from './links/entities/link.entity';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { HeaderEntity } from './header/entities/header.entity';
import { FooterEntity } from './footer/entities/footer.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'amircms',
      entities: [
        PageEntity,
        MenuItemEntity,
        MenuEntity,
        LinkEntity,
        HeaderEntity,
        FooterEntity,
      ],
      synchronize: true,
    }),
    PagesModule,
    MenuItemsModule,
    MenusModule,
    LinksModule,
    HeaderModule,
    FooterModule,
  ],
  providers: [ResponseService],
})
export class AppModule {}
