import { Body, Get, Headers, Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreditCard } from './entities/CreditCard.entity';
import { DeleteResult, InsertResult, Repository } from 'typeorm';

@Injectable()
export class CreditCardService {

    constructor (
        @InjectRepository (CreditCard) 
        private CreditCardRepository:Repository<CreditCard> 
    ) {}

    /************************************************ */
    
    async cc1(user_Id:number):Promise<CreditCard[]> {
        return await this.CreditCardRepository.findBy({"user_Id":user_Id});
    }


    async getCreditCardById(id:number):Promise<CreditCard> {
        return await this.CreditCardRepository.findOneBy({"id":id});
    }



    async setDefaultCard(card_Number:string,user_id:number): Promise<any> {
        var [ab,cd]=await this.CreditCardRepository.findAndCount({where:{ user_Id:user_id} });
        if(cd>0) {
          for(var t of ab) {
            if(t.card_Number==card_Number) {
              await this.CreditCardRepository.update(t.id,{...t,is_default:true});
            }
           else await this.CreditCardRepository.update(t.id,{...t,is_default:false});
          }
        }
       return this.cc1(user_id);
      }

 

    async cc2(cd:CreditCard):Promise<InsertResult> {
        return await this.CreditCardRepository.insert(cd);
    }

    
    async cc3(card_Number:number,cd:CreditCard ):Promise<any> {
        var rc=await this.CreditCardRepository.findOneBy({"id":card_Number});
        return await this.CreditCardRepository.update(card_Number,{...rc,...cd});
    }


    async cc4(crn:string, user_Id: number): Promise<any> {
        await this.CreditCardRepository.delete({"card_Number":crn});
        console.log("successfullly deleted")
        return await this.cc1(user_Id)
    }


}
