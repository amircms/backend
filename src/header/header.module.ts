import { Module } from '@nestjs/common';
import { HeaderService } from './header.service';
import { HeaderController } from './header.controller';
import { HeaderEntity } from './entities/header.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([HeaderEntity])],
  controllers: [HeaderController],
  providers: [HeaderService],
})
export class HeaderModule {}
