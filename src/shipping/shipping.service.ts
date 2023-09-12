import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Shipping } from './shipping.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ShippingService {


    constructor(
        @InjectRepository(Shipping)
        private ShippingRepository: Repository<Shipping>,

    ){}

    /******************************Shipping CRUD****************************/
    async addShippingMethod(shm:Shipping):Promise<any> {
            return await this.ShippingRepository.insert(shm);
    }

    async getShipping():Promise<any> {
        return await this.ShippingRepository.find();
    }

    async updateShipping(sh_id:number,shm:Shipping):Promise<any> {
        var ab=await this.ShippingRepository.findOneBy({"sh_id":sh_id});
        return await this.ShippingRepository.update(sh_id,{...ab,...shm});
    }

    async removeShippingMethod(sh_id:number):Promise<any> {
         await this.ShippingRepository.delete(sh_id);
         return this.ShippingRepository.find();

    }

}
