import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';
import { Store_orders } from './entities/store_orders.entity';
import { Pagination, Search } from 'src/globalHelper';

@Injectable()
export class Store_ordersService {
  constructor(
    @InjectRepository(Store_orders)
    private store_orderRepository: Repository<Store_orders>,
  ) {}

  /****************Store_orderss CRUD********************/
  async getStore_orders(): Promise<any> {
    return await this.store_orderRepository.find();
    
  }

  async m7s(name:string,n?: number, page?: number):Promise<any> {
    var ab=await this.store_orderRepository.find();
   return Search(name,ab,n,page);
  }

  async m5(sid:number):Promise<any> {
    return await this.store_orderRepository.findBy({"store_id":sid});
    
  }

  findOneStore_ordersItem(store_order_id: number): Promise<Store_orders> {
    return this.store_orderRepository.findOneBy({ store_order_id });
  }

  createStore_ordersItem(store_order_item: Store_orders): Promise<InsertResult> {
    return this.store_orderRepository.insert(store_order_item);
  }

  // async updateStore_ordersItem(store_order_id: number, store_order_item: Store_orders): Promise<UpdateResult> {
  //   const store_orderList: Store_orders[] = await this.store_orderRepository.findBy({ store_order_id })
  //   if(store_orderList && store_orderList.length){
  //     return this.store_orderRepository.update(store_order_id, store_order_item);
  //   }else{
  //     return new Promise<UpdateResult>((resolve, reject) => {
  //       //  resolve(null)
  //     })
  //   }
  // }

  async updateStore_ordersItem(store_order_id: number, store_order_item: Store_orders): Promise<UpdateResult> {
    const rc = await this.store_orderRepository.findOneBy({ store_order_id })
    if(rc){
      return this.store_orderRepository.update(store_order_id, {...rc, ...store_order_item } );
    }
    else{
      return new Promise<UpdateResult>((resolve, reject) => {
        //  resolve(null)
      })
    }
  }

  async removeFromStore_orders(store_order_id: number): Promise<any> {
     await this.store_orderRepository.delete(store_order_id);
     return await this.store_orderRepository.find();
  }
}