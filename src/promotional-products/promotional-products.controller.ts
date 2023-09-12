import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { PromotionalProductsService } from './promotional-products.service';
import { PromotionalProduct } from './promotional-products.entity';
import { DeleteResult, InsertResult, UpdateResult } from 'typeorm';

@Controller('promotional-products')
export class PromotionalProductsController {
    constructor(
        private readonly pps: PromotionalProductsService
    ) {}
/************************************************************************************ */

@Get('promotionalProducts')
async m1():Promise<any> {
return await this.pps.m1s();
}


@Get('Promotional_Product_Search/:keyword')
async m7(@Param('keyword') name:string , @Query('items_per_page') n?: number,@Query('page_number') pgn?: number):Promise<any> {
return this.pps.m7s(name,n,pgn);
}




@Get('promotionalProductsById/:ppid')
async m2(@Param() ppid:number):Promise<PromotionalProduct> {
return await this.pps.m2s(ppid);
}

@Post('insertPromotionalProduct')
async m5(@Body() pp:PromotionalProduct ): Promise<InsertResult> {
return await this.pps.m5s(pp);
}

@Put('updatePromotionalProduct/:ppid')
async m3(@Param('ppid') ppid:number , @Body() pp:PromotionalProduct ) :Promise<UpdateResult> {
    return await this.pps.m3s(ppid,pp);
}

@Delete('pomotionalProductById/:ppid')
async m4s(@Param('ppid') ppid:number) : Promise<DeleteResult> {
    return await this.pps.m4s(ppid);
}





    
}
