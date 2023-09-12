import { Body, Get, Headers, Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, InsertResult, Repository } from 'typeorm';
import { Tax } from './tax.entity';

@Injectable()
export class TaxService {

    constructor (
        @InjectRepository (Tax) 
        private TaxRepository:Repository<Tax> 
    ) {}

    /************************************************ */
    
    async taxList():Promise<Tax[]> {
        return await this.TaxRepository.find();
    }


    async getTaxById(id:number):Promise<Tax> {
        return await this.TaxRepository.findOneBy({"tx_id":id});
    }

 

    async addTax(tax:Tax):Promise<InsertResult> {
        return await this.TaxRepository.insert(tax);
    }

    
    async taxUpdate(tx_id:number,tax:Tax ):Promise<any> {
        var rc=await this.TaxRepository.findOneBy({"tx_id":tx_id});
        return await this.TaxRepository.update(tx_id,{...rc,...tax});
    }


    async removeTax(tx_id:number): Promise<any> {
        await this.TaxRepository.delete({"tx_id":tx_id});
        return await this.taxList();
    }


}
