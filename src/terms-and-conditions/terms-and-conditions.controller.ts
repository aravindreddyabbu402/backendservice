import { TermsAndConditionsService } from './terms-and-conditions.service';
import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { DeleteResult, InsertResult } from 'typeorm';
import { TermsAndConditions } from './TermsAndConditions.entity';

@Controller('terms-and-conditions')
export class TermsAndConditionsController {

    constructor( private readonly TermsAndConditionsService:TermsAndConditionsService) {}
    /******************************************************* */

    @Get('AllTermsAndConditions')
    async findAllTermsAndConditions():Promise<any> {
        return this.TermsAndConditionsService.getAllTermsAndConditions();
    }
    @Get('TermsAndConditions')
    async findTermsAndConditions():Promise<any> {
        return this.TermsAndConditionsService.getTermsAndConditions();
    }
    


    @Get('TermsAndConditionsById/:id')
    async getAllTermsAndConditionsByProductId(@Param('id') id:number):Promise<any> {
        return this.TermsAndConditionsService.getTermsAndConditionsById(id);
    }
    
    @Get('TermsAndConditions__Search/:keyword')
    m2(@Param('keyword') name:string , @Query('items_per_page') n?: number,@Query('page_number') pgn?: number):Promise<any> {
      return this.TermsAndConditionsService.m2s(name,n,pgn);
    }

    @Post('AddTermsAndConditions')
    async insertTermsAndConditions(@Body() tc:TermsAndConditions) :Promise<InsertResult> {
        return this.TermsAndConditionsService.addTermsAndConditions(tc);
    }


    @Put('UpdateTermsAndConditions/:id')
    async updateHscreen(@Param('id') id:number,@Body() tc:TermsAndConditions) :Promise<any> {
        return this.TermsAndConditionsService.UpdateTermsAndConditions(id,tc);
    }
    @Post('DeleteTermsAndConditions/:id')
    async deleteHscreen(@Param('id') id:number ) :Promise<any> {
        return await this.TermsAndConditionsService.DeleteTermsAndConditions(id);
    }
    
}
