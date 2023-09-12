import { Body, Injectable, Param } from '@nestjs/common';
import { Hscreen } from './hscreen.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';
import { Pagination, Search } from 'src/globalHelper';
import { PaginationParams } from 'src/utils/PaginationParams.dto';

@Injectable()
export class HscreenService {
    constructor(
        @InjectRepository(Hscreen)
        private HscreenRepository: Repository<Hscreen>,
    ){}
    /*********************************************************** */



    async getHscreens() :Promise<any> {
        return await this.HscreenRepository.find();
        
    }

    
    async getHscreensByCatId(cat_id:number):Promise<any> {
        return await this.HscreenRepository.findBy({category_Id:cat_id});
          
    }
         
  async m2s(name:string,n?: number, page?: number):Promise<any> {
    var ab=await this.HscreenRepository.find();
    return Search(name,ab,n,page);
  }
    async getHscreensByProductId(prId:number):Promise<any> {
        return await this.HscreenRepository.findBy({"product_id":prId});
       
    }

    async addHscreen(@Body() hs:Hscreen) :Promise<InsertResult> {
        return await this.HscreenRepository.insert(hs);
    }

   

    async UpdateHscreen(pid :number,hs:Hscreen) : Promise<any> {
        var existingHScreen=await this.HscreenRepository.findOneBy({"product_id":hs.product_id});
        if(existingHScreen) {
            return this.HscreenRepository.update(pid,{...existingHScreen,...hs});
        }
        else{
                  return new Promise<UpdateResult>((_resolve, reject) => {
                    //  resolve(null)
                  })
                }
    }

   

    async  DeleteHscreen(prId:number):Promise<any> {
         await this.HscreenRepository.delete(prId);
         return await this.HscreenRepository.find();
    }




}
