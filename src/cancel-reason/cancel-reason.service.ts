import { Body, Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';
import { Pagination, Search } from 'src/globalHelper';
import { cancelReason } from './cancelReason.entity';

@Injectable()
export class CancelReasonService {
    constructor(
        @InjectRepository(cancelReason)
        private cancelReasonRepository: Repository<cancelReason>,
    ){}
    /*********************************************************** */

    async CancelReasons() :Promise<any> {
        return await this.cancelReasonRepository.find();
    }

    
    
    async cancelReasonById(id:number):Promise<any> {
        return await this.cancelReasonRepository.findOneBy({"res_id":id});
    }
                
        async m2s(name:string,n?: number, page?: number):Promise<any> {
            var ab=await this.cancelReasonRepository.find();
            return Search(name,ab,n,page);
        }
      

    async addcancelReason(@Body() cancelReason:cancelReason) :Promise<InsertResult> {
        return await this.cancelReasonRepository.insert(cancelReason);
    }


    async UpdatecancelReason(id :number,cancelReason:cancelReason) : Promise<any> {
        var existingcancelReason=await this.cancelReasonRepository.findOneBy({"res_id":id});
        if(existingcancelReason) {
            return this.cancelReasonRepository.update(id,{...existingcancelReason,...cancelReason});
        }
        else{
                  return new Promise<UpdateResult>((_resolve, reject) => {
                    //  resolve(null)
                  })
                }
        }

    async DeletecancelReason(id:number):Promise<any> {
         await this.cancelReasonRepository.delete(id);
         return await this.cancelReasonRepository.find();
    }




}
