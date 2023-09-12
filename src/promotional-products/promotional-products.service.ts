import { Injectable } from '@nestjs/common';
import { PromotionalProduct } from './promotional-products.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';
import { Pagination, Search } from 'src/globalHelper';

@Injectable()
export class PromotionalProductsService {
    constructor(
        @InjectRepository(PromotionalProduct)
    private ppc: Repository<PromotionalProduct>,
    ){}
    /************************************************************************************ */
    async m1s() :Promise<any> {
        return await this.ppc.find();
    }

    async m7s(name:string,n?: number, page?: number):Promise<any> {
        var ab=await this.ppc.find();
       return Search(name,ab,n,page);
      }

      
      
    async m2s(ppid:number) : Promise<PromotionalProduct> {
        return await this.ppc.findOneBy({"product_id":ppid});
    }


    async m5s(pp:PromotionalProduct) : Promise<InsertResult> {
        return await this.ppc.insert(pp);
    }

    async m3s(ppid:number,pp:PromotionalProduct) : Promise<any> {
        var rc=await this.ppc.findOneBy({"product_id":ppid});
        await this.ppc.delete(ppid);
        var ab={...rc,...pp};
        return await this.ppc.insert(ab);
    }


    async m4s(ppid:number):Promise<DeleteResult> {
        return await this.ppc.delete(ppid);
    }
    
}

