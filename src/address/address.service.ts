import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';
import { Address } from './entities/address.entity';
import { Users } from 'src/user/entities/user.entity';
import { Pagination, Search } from 'src/globalHelper';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(Address)
    private addressRepository: Repository<Address>,
    @InjectRepository(Users)
    private userRepository: Repository<Users>
  ) {}

  /****************Address CRUD********************/
  findAddressByUser(user_id:number): Promise<Address[]> {
    return this.addressRepository.findBy({ user_id });
  }

  async setDefaultAddress(address_id:number,user_id:number): Promise<any> {
    var [ab,cd]=await this.addressRepository.findAndCount({where:{ user_id} });
    if(cd>0) {
      for(var t of ab) {
        if(t.address_id==address_id) {
          await this.addressRepository.update(t.address_id,{...t,is_default:true});
        }
       else await this.addressRepository.update(t.address_id,{...t,is_default:false});
      }
    }
   return this.findAddressByUser(user_id);
  }


 async  qw12(): Promise<any> {
 var urs=await this.userRepository.find();
 var adrses=await this.addressRepository.find();
 //username,address,phonenumber
 var h,j;var yt=[];var yt1;

 for (h of adrses) {
 for (j of urs) {
if(h.user_id==j.id) {
// yt.push({...j,...h});
yt.push({"id":j.id,"name":j.name,"phone":j.user_phone,"address":h});
}
 }
 }
   
    return yt;
  }

  async getAddressBySearch(name:string,n?: number, page?: number):Promise<any> {
    var ab=await this.addressRepository.find();
  return Search(name,ab,n,page);
  }

  findOneAddress(address_id: number): Promise<Address> {
    return this.addressRepository.findOneBy({ address_id });
  }

  createAddress(address: Address): Promise<InsertResult> {
    return this.addressRepository.insert(address);
  }

  async updateAddress(address_id: number, address: Address): Promise<UpdateResult> {
    const existingAddress: Address = await this.addressRepository.findOneBy({ address_id })
    if(address){
      return this.addressRepository.update(address_id, {...existingAddress, ...address, });
    }else{
      return new Promise<UpdateResult>((resolve, reject) => {
        //  resolve(null)
      })
    }
  }

  async removeAddress(address_id: number, user_Id: number): Promise<Address[]> {
    await this.addressRepository.delete(address_id);
    return await this.findAddressByUser(user_Id);
  }

}