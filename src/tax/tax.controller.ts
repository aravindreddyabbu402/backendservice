

import { Body, Controller, Delete, Get, Headers, Param, Post, Put } from '@nestjs/common';
import { InsertResult } from 'typeorm';
import { TaxService } from './tax.service';
import { Tax } from './tax.entity';

@Controller('tax')
export class TaxController {
constructor(
    private readonly TaxService: TaxService 
){}
/*************************************************** */

@Get('taxList')
async getTaxList(): Promise<Tax[]> {
  return this.TaxService.taxList();
}
   
@Get('Tax_by_Id/:id')
async GetTaxById(@Param('id') id:number ): Promise<Tax> {
  return this.TaxService.getTaxById(id);
}
    

@Post('AddTax')
async NewTaxInsert(@Body() tax:Tax): Promise<InsertResult> {
    return this.TaxService.addTax(tax);
}
@Put('TaxUpdate/:tx_id')
async UpdateTax(@Param("tx_id") tx_id:number , @Body() tx:Tax ): Promise<any> {
    return this.TaxService.taxUpdate(tx_id,tx);
}
@Delete('RemoveTax/:tx_id')
async DeleteTax(@Param('tx_id') tx_id:number) : Promise<any> {
    return this.TaxService.removeTax(tx_id);
}

}