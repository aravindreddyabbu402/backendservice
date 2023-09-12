import { Controller, Get, Param, Post, Put, Delete, Body, Query } from '@nestjs/common';
import { DeliveryBoysService } from './dBoy.service';
import { DeliveryBoy } from './entities/dBoy.entity';
import { DeleteResult, InsertResult, UpdateResult } from 'typeorm';
import { ApiBearerAuth, ApiHeader } from '@nestjs/swagger';

@ApiHeader({
  name: 'userId',
})
@Controller()
@ApiBearerAuth()
export class DeliveryBoyController {
  constructor(private readonly deliveryBoyService: DeliveryBoysService) {}

  /****************DeliveryBoys CRUD********************/
  @Get('deliveryBoys')
  getDeliveryBoys(): Promise<any> {
    return this.deliveryBoyService.findAllDeliveryBoys();
  }

  
  @Get('DBoy__Search/:keyword')
  m2(@Param('keyword') name:string , @Query('items_per_page') n?: number,@Query('page_number') pgn?: number):Promise<any> {
    return this.deliveryBoyService.m2s(name,n,pgn);
  }


  @Get('deliveryBoy/:id')
  getDeliveryBoy(@Param('id') deliveryBoy_id: number): Promise<DeliveryBoy> {
    return this.deliveryBoyService.findOneDeliveryBoy(deliveryBoy_id);
  }
  @Post('deliveryBoy')
  addDeliveryBoy(@Body() deliveryBoy: DeliveryBoy): Promise<InsertResult> {
    return this.deliveryBoyService.createDeliveryBoy(deliveryBoy);
  }
  @Put('deliveryBoy/:id')
  updatedeliveryBoy(@Param('id') deliveryBoy_id: number, @Body() deliveryBoy:DeliveryBoy): Promise<UpdateResult> {
    return this.deliveryBoyService.updatedeliveryBoy(deliveryBoy_id, deliveryBoy);
  }
  @Delete('deliveryBoy/:id')
  deleteDeliveryBoy(@Param('id') deliveryBoy_id: number): Promise<any> {
    return this.deliveryBoyService.removeDeliveryBoy(deliveryBoy_id);
  }
}
