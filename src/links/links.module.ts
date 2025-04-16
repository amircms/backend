import { Module } from '@nestjs/common';
import { LinksService } from './links.service';
import { LinksController } from './links.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LinkEntity } from './entities/link.entity';
import { PagesModule } from '../pages/pages.module';

@Module({
  imports: [TypeOrmModule.forFeature([LinkEntity]), PagesModule],

  controllers: [LinksController],
  providers: [LinksService],
})
export class LinksModule {}
