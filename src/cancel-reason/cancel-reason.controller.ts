import { CancelReasonService } from './cancel-reason.service';
import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { DeleteResult, InsertResult } from 'typeorm';
import { cancelReason } from './cancelReason.entity';
@Controller('cancel-reason')
export class CancelReasonController {
    constructor( private readonly CancelReasonService:CancelReasonService) {}
    /******************************************************* */
    @Get('')
    async getCancelReasons():Promise<any> {
        return this.CancelReasonService.CancelReasons();
    }

    @Get('/:id')
    async getcancelReasonById(@Param('id') id:number):Promise<any> {
        return this.CancelReasonService.cancelReasonById(id);
    }

  
    
    @Get('cancelReason__Search/:keyword')
    m2(@Param('keyword') name:string , @Query('items_per_page') n?: number,@Query('page_number') pgn?: number):Promise<any> {
      return this.CancelReasonService.m2s(name,n,pgn);
    }

    @Post('')
    async insertcancelReason(@Body() cr:cancelReason) :Promise<InsertResult> {
        return this.CancelReasonService.addcancelReason(cr);
    }

    @Put('/:id')
    async updatecancelReason( @Param('id') id:number, @Body() cr:cancelReason) :Promise<any> {
        return this.CancelReasonService.UpdatecancelReason(id,cr);
    }
    @Delete('/:id')
    async deletecancelReason(@Param('id') id:number ) :Promise<any> {
        return await this.CancelReasonService.DeletecancelReason(id);
    }
    
}
