import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Store_ordersService } from './store_orders.service';
import { Store_orderController } from './store_orders.controller';
import { Store_orders } from './entities/store_orders.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Store_orders])],
  exports: [TypeOrmModule],
  providers: [Store_ordersService],
  controllers: [Store_orderController],
})
export class StoreOrdersModule {}