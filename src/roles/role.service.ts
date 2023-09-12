import { Injectable, Query } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';
import { Roles } from './entities/roles.entity';
import { Pagination, Search } from 'src/globalHelper';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Roles)
    private rolesRepository: Repository<Roles>,
  ) {}

  /****************Roless CRUD********************/
 async findAllRoles(): Promise<any> {
    return await this.rolesRepository.find();
   
  }

  async m7s(name:string,n?: number, page?: number):Promise<any> {
    var ab=await this.rolesRepository.find();
    return Search(name,ab,n,page);
  }

 async findRolesPerUser(user_id: number): Promise<any>{
    return await this.rolesRepository.findBy({ user_id });
    
  }

  findOneRoles(role_id: number): Promise<Roles> {
    return this.rolesRepository.findOneBy({ role_id });
  }

  createRoles(roles: Roles): Promise<InsertResult> {
    return this.rolesRepository.insert(roles);
  }

  // async updateroles(role_id: number, roles: Roles): Promise<UpdateResult> {
  //   const rolesList: Roles[] = await this.rolesRepository.findBy({ role_id })
  //   if(rolesList && rolesList.length){
  //     return this.rolesRepository.update(role_id, roles);
  //   }else{
  //     return new Promise<UpdateResult>((resolve, reject) => {
  //       //  resolve(null)
  //     })
  //   }
  // }

  async updateroles(role_id: number, roles: Roles): Promise<UpdateResult> {
    const rc= await this.rolesRepository.findOneBy({ role_id })
    if(rc){
      return this.rolesRepository.update(role_id, {...rc,...roles});
    }else{
      return new Promise<UpdateResult>((resolve, reject) => {
        //  resolve(null)
      })
    }
  }

  async removeRoles(role_id: number): Promise<any> {
    await this.rolesRepository.delete(role_id);
    return this.rolesRepository.find();
  }

}