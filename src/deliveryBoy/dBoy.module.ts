import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeliveryBoysService } from './dBoy.service';
import { DeliveryBoyController } from './dBoy.controller';
import { DeliveryBoy } from './entities/dBoy.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DeliveryBoy])],
  exports: [TypeOrmModule],
  providers: [DeliveryBoysService],
  controllers: [DeliveryBoyController],
})
export class DeliveryBoyModule {}