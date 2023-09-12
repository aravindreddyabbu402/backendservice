import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Transaction } from './Transaction.entity';
import { InsertResult, Repository, UpdateResult } from 'typeorm';
import { Pagination, Search } from 'src/globalHelper';

@Injectable()
export class TransactionService {

    constructor(
        @InjectRepository(Transaction)
        private TransactionRepository : Repository<Transaction> 
        ) {}
        /************************************ */


        async getTns(user_Id:number,n?: number, page?: number):Promise<any> {
        //  var cd=await this.TransactionRepository.findBy( {user_Id:user_Id} );
        //  var gh=Pagination(cd,n,page);return gh;
         const  limit=n;
         const skip = (page - 1) * limit;
         const [results, total] = await this.TransactionRepository.findAndCount({
           where:{"user_Id":user_Id},
           skip,
           take: limit,
           });
           return results;
        }


        async getTnsUserSearch(user_Id:number,kw:string,n?: number, page?: number):Promise<any> {
            var cd=await this.TransactionRepository.findBy( {user_Id:user_Id} );
            return Search(kw,cd,n,page);
        }

        insertNewTns(@Body() tsc:Transaction):Promise<InsertResult> {
            return this.TransactionRepository.insert(tsc);
        }

        async updateTns(py_id:number, tsc:Transaction):Promise<any>{
            var rc=await this.TransactionRepository.findOneBy({"py_id":tsc.py_id});
            if(rc) {
                return this.TransactionRepository.update(py_id,{...rc,...tsc});
            }
            else{
                      return new Promise<UpdateResult>((_resolve, reject) => {
                        //  resolve(null)
                      })
                    }
                }

       
}
