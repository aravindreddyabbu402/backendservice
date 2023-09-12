
import { Body, Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';
import { Pagination, Search } from 'src/globalHelper';
import { PaginationParams } from 'src/utils/PaginationParams.dto';
import { TermsAndConditions } from './TermsAndConditions.entity';

@Injectable()
export class TermsAndConditionsService {


    constructor(
        @InjectRepository(TermsAndConditions)
        private TermsAndConditionsRepository: Repository<TermsAndConditions>,
    ){}
    /*********************************************************** */


    async getAllTermsAndConditions() :Promise<any> {
        return await this.TermsAndConditionsRepository.find();
    }

    async getTermsAndConditions() :Promise<any> {
        var ab= await this.TermsAndConditionsRepository.findAndCount({order:{id:"DESC"},take:1});
        return ab[0][0];
    }

    
    async getTermsAndConditionsById(id:number):Promise<any> {
        return await this.TermsAndConditionsRepository.findOneBy({id:id});
          
    }
         
  async m2s(name:string,n?: number, page?: number):Promise<any> {
    var ab=await this.TermsAndConditionsRepository.find();
    return Search(name,ab,n,page);
  }
    async getTermsAndConditionssByProductId(id:number):Promise<any> {
        return await this.TermsAndConditionsRepository.findBy({"id":id});
       
    }

    async addTermsAndConditions(@Body() tc:TermsAndConditions) :Promise<InsertResult> {
       var tc1=tc;tc1.TimeStamp=new Date();
        return await this.TermsAndConditionsRepository.insert(tc);
    }

   

    async UpdateTermsAndConditions(id :number,tc:TermsAndConditions) : Promise<any> {
        var existingTermsAndConditions=await this.TermsAndConditionsRepository.findOneBy({"id":id});
        console.log(existingTermsAndConditions);
        if(existingTermsAndConditions) {
            return this.TermsAndConditionsRepository.update(id,{...existingTermsAndConditions,...tc});
        }
        else{
                  return new Promise<UpdateResult>((_resolve, reject) => {
                    //  resolve(null)
                  })
                }
    }

   

    async  DeleteTermsAndConditions(id:number):Promise<any> {
         await this.TermsAndConditionsRepository.delete(id);
         return await this.TermsAndConditionsRepository.find();
    }




}
