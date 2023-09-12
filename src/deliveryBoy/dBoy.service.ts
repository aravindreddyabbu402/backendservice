import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';
import { DeliveryBoy } from './entities/dBoy.entity';
import { Pagination, Search } from 'src/globalHelper';

@Injectable()
export class DeliveryBoysService {
  constructor(
    @InjectRepository(DeliveryBoy)
    private deliveryBoyRepository: Repository<DeliveryBoy>,
  ) {}

  /****************DeliveryBoys CRUD********************/
 async findAllDeliveryBoys(): Promise<any> {
    return await this.deliveryBoyRepository.find();
    
  }

  
  async m2s(name:string,n?: number, page?: number):Promise<any> {
    var ab=await this.deliveryBoyRepository.find();
    return Search(name,ab,n,page);
  }


  findOneDeliveryBoy(dboy_id: number): Promise<DeliveryBoy> {
    return this.deliveryBoyRepository.findOneBy({ dboy_id });
  }

  createDeliveryBoy(deliveryBoy: DeliveryBoy): Promise<InsertResult> {
    return this.deliveryBoyRepository.insert(deliveryBoy);
  }

  // async updatedeliveryBoy(dboy_id: number, deliveryBoy: DeliveryBoy): Promise<UpdateResult> {
  //   const deliveryBoyList: DeliveryBoy[] = await this.deliveryBoyRepository.findBy({ dboy_id })
  //   if(deliveryBoyList && deliveryBoyList.length){
  //     return this.deliveryBoyRepository.update(dboy_id, deliveryBoy);
  //   }else{
  //     return new Promise<UpdateResult>((resolve, reject) => {
  //       //  resolve(null)
  //     })
  //   }
  // }

  async updatedeliveryBoy(dboy_id: number, deliveryBoy: DeliveryBoy): Promise<UpdateResult> {
    const existingDBoy = await this.deliveryBoyRepository.findOneBy({ dboy_id })
    if(existingDBoy){
      return this.deliveryBoyRepository.update(dboy_id, {...existingDBoy,...deliveryBoy});
    }else{
      return new Promise<UpdateResult>((resolve, reject) => {
        //  resolve(null)
      })
    }
  }
 

  async removeDeliveryBoy(id: number): Promise<any> {
    await this.deliveryBoyRepository.delete(id);
    return await this.deliveryBoyRepository.find();
  }

}