import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DealService } from './deal.service';
import { DealController } from './deal.controller';
import { DealProduct } from './entities/deal.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DealProduct])],
  exports: [TypeOrmModule],
  providers: [DealService],
  controllers: [DealController],
})
export class DealModule {}