import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PageModule } from './page/page.module';
import { PageEntity } from './page/entities/page.entity';
import { PostModule } from './post/post.module';
import { PostEntity } from './post/entities/post.entity';
import { MenuModule } from './menu/menu.module';
import { MenuEntity } from './menu/entities/menu.entity';
import { ResponseService } from './response/response.service';
import { UserModule } from './user/user.module';
import { SettingModule } from './setting/setting.module';
import { UserEntity } from './user/entities/user.entity';
import { SettingEntity } from './setting/entities/setting.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'cms',
      entities: [PostEntity, PageEntity, MenuEntity, UserEntity, SettingEntity],
      synchronize: true,
    }),
    PageModule,
    PostModule,
    MenuModule,
    UserModule,
    SettingModule,
  ],
  providers: [ResponseService],
})
export class AppModule {}
