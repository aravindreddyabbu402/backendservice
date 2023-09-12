import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';
import { Admin } from './entities/admin.entity';
import { Pagination, Search } from 'src/globalHelper';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Admin)
    private adminRepository: Repository<Admin>,
  ) {}

  /****************Admins CRUD********************/
  async findAllAdmins(): Promise<any> {
    return await this.adminRepository.find();
   
  }

  async getAdminsByNameSearch(name:string,n?: number, page?: number):Promise<any> {
    var ab=await this.adminRepository.find();
   return Search(name,ab,n,page);
  }

  findOneAdmin(id: number): Promise<Admin> {
    return this.adminRepository.findOneBy({ id });
  }

  createAdmin(admin: Admin): Promise<InsertResult> {
    return this.adminRepository.insert(admin);
  }

  // async updateadmin(id: number, admin: Admin): Promise<UpdateResult> {
  //   const adminList: Admin[] = await this.adminRepository.findBy({ id })
  //   if(adminList && adminList.length){
  //     return this.adminRepository.update(id, admin);
  //   }else{
  //     return new Promise<UpdateResult>((resolve, reject) => {
  //       //  resolve(null)
  //     })
  //   }
  // }

   async updateadmin(id: number, admin: Admin): Promise<UpdateResult> {
    const existingAdmin: Admin = await this.adminRepository.findOneBy({ id });
    if(admin){
      return this.adminRepository.update(id, {...existingAdmin, ...admin, });
    }else{
      return new Promise<UpdateResult>((resolve, reject) => {
        //  resolve(null)
      })
    }
    
  }

  async removeAdmin(id: number): Promise<any> {
    await this.adminRepository.delete(id);
    return await this.adminRepository.find();
  }

}