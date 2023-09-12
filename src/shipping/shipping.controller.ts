import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ShippingService } from './shipping.service';
import { Shipping } from './shipping.entity';

@Controller('shipping')
export class ShippingController {

    constructor(private readonly ss:ShippingService){}

    /***************************************************************** */
        @Get('readShipping')
        readShipping():Promise<any> {
            return this.ss.getShipping();
        }
        @Post('Add_ShippingMethod')
        InsertShipping(@Body() shm:Shipping):Promise<any> {
            return this.ss.addShippingMethod(shm);
        }
        @Put('update_ShippingMethod/:id')
        UpdateShipping(@Param('id') sh_id:number,@Body() shm:Shipping):Promise<any> {
            return this.ss.updateShipping(sh_id,shm);
        }
        @Delete('deleteShippingMethod_By_Id/:id')
        DeleteShippingMethod(@Param('id') sh_id:number):Promise<any> {
            return this.ss.removeShippingMethod(sh_id);
        }

}
