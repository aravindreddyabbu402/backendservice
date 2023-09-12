import { Controller, Get, Param, Post, Put, Delete, Body, Query } from '@nestjs/common';
import { Store_ordersService } from './store_orders.service';
import { Store_orders } from './entities/store_orders.entity';
import { DeleteResult, InsertResult, UpdateResult } from 'typeorm';
import { ApiBearerAuth, ApiHeader } from '@nestjs/swagger';

@ApiHeader({
  name: 'userId',
})
@Controller()
@ApiBearerAuth()
export class Store_orderController {
  constructor(private readonly store_orderService: Store_ordersService) {}

  /****************Store_order CRUD********************/
  @Get('readStore_order')
  getStore_order( ): Promise<any> {
    return this.store_orderService.getStore_orders();
  }

  @Get('Search_StoreOrder_ByKeyWord/:name')
  async m7(@Param('name') name:string , @Query('items_per_page') n?: number,@Query('page_number') pgn?: number):Promise<any> {
  return this.store_orderService.m7s(name,n,pgn);
  }

  @Get('Store_ordersByStoreId/:Store_id')
  getStore_ordersByStoreId(@Param('Store_id') store_order_id: number): Promise<any> {
    return this.store_orderService.m5(store_order_id);
  }

  @Get('readStore_orderItem/:id')
  getStore_orderItem(@Param('id') store_order_id: number): Promise<Store_orders> {
    return this.store_orderService.findOneStore_ordersItem(store_order_id);
  }
  @Post('addToStore_order')
  addToStore_order(@Body() store_order: Store_orders): Promise<InsertResult> {
    return this.store_orderService.createStore_ordersItem(store_order);
  }
  @Put('updateStore_orderItem/:id')
  updateStore_order(@Param('id') store_order_id: number, @Body() store_order:Store_orders): Promise<UpdateResult> {
    return this.store_orderService.updateStore_ordersItem(store_order_id, store_order);
  }
  @Delete('removeFromStore_order/:id')
  deleteStore_order(@Param('id') store_order_id: number): Promise<any> {
    return this.store_orderService.removeFromStore_orders(store_order_id);
  }
}
