import { Body, Get, Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InsertResult, Repository, UpdateResult } from 'typeorm';
import { Notify } from './notify.entity';
import { get } from 'http';
import { Pagination, Search } from 'src/globalHelper';
import { Users } from 'src/user/entities/user.entity';
import { Store } from 'src/store/entities/store.entity';

@Injectable()
export class NotifyService {

    constructor(
    @InjectRepository(Notify)
    private notifyRepository:Repository<Notify> ,
    @InjectRepository(Store)
    private storeRepository: Repository<Store>,
    @InjectRepository(Users)
    private userRepository: Repository<Users>
    ) {}

    /*************************** */
    async getNfcs():Promise<any> {
            return await this.notifyRepository.find();
            
    }

    async getUsersNfcs():Promise<any> {
      var ab= await this.notifyRepository.find();
      var cd=ab.filter(b=>b.user_id>0);
      var ar=[];
      for (var a of cd) {
        var usr=await this.userRepository.findOneBy({"id":a.user_id});
        if(usr)  ar.push({...a,"user_details":(usr.name+" - "+usr.user_phone)})
      }
      console.log(ar);

      return ar;
    }

    
    async getStoreNfcs():Promise<any> {
      var ab= await this.notifyRepository.find();
      var cd=ab.filter(b=>b.store_id>0);
      var ar=[];
      for (var a of cd) {
        var store=await this.storeRepository.findOneBy({"id":a.store_id});
        if(store)  ar.push({...a,"store_details":(store.store_name+" - "+store.phone_number)})
      }
      console.log(ar);

      return ar;
    }


    async getNfsById(id:number):Promise<Notify> {
        return await this.notifyRepository.findOneBy({ "notify_id" :id});
    }


    async getNfsByUserId(uid:number):Promise<any> {
        return await this.notifyRepository.findBy({user_id:uid});
    }

    async m2s(name:string,n?: number, page?: number):Promise<any> {
      var ab=await this.notifyRepository.find();
      return Search(name,ab,n,page);
    }

    async addNfs(@Body() nf:Notify):Promise<InsertResult> {
        return await this.notifyRepository.insert(nf); 
    }

    async updateNfs(nf_id:number, nf:Notify ) :Promise<any> {
       var existingNf=await this.notifyRepository.findOneBy({notify_id:nf_id});
       if(existingNf){
              return this.notifyRepository.update(nf_id, {...existingNf,...nf});
            }else{
              return new Promise<UpdateResult>((_resolve, reject) => {
                //  resolve(null)
              })
            }
    }

     
    
     
    

}
