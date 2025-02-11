import { Module } from '@nestjs/common';
import { MenuService } from './menu.service';
import { MenuController } from './menu.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MenuEntity } from './entities/menu.entity';
import { ResponseService } from '../response/response.service';

@Module({
  imports: [TypeOrmModule.forFeature([MenuEntity])],
  controllers: [MenuController],
  providers: [MenuService, ResponseService],
})
export class MenuModule {}
