import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { readFileSync } from 'fs';
import { DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';
import { RecentSearch } from './entities/recentSearch.entity';
import { parse } from 'papaparse';
import { Pagination, Search } from 'src/globalHelper';

@Injectable()
export class RecentSearchService {
  constructor(
    @InjectRepository(RecentSearch)
    private recentSearchRepository: Repository<RecentSearch>,
  ) {}

  /****************RecentSearchs CRUD********************/
 async  getRecentSearch(user_id: number): Promise<RecentSearch[]> {
    const skip: number= 0;
  const [results,count]=await this.recentSearchRepository.findAndCount({
      where:{"user_id":user_id},
      order: { id: 'DESC' },
      skip,
      take: 7,
      });
    return results;
  }

  async m7s(name:string,n?: number, page?: number):Promise<any> {
    var ab=await this.recentSearchRepository.find();
    return Search(name,ab,n,page);
  }

  async  getAllRecentSearchByUserId(user_id: number): Promise<any> {
    return await this.recentSearchRepository.findBy({user_id});
    
  }




  findOneRecentSearchItem(id: number): Promise<RecentSearch> {
    return this.recentSearchRepository.findOneBy({ id });
  }

  createRecentSearchItem(recentSearch_item: RecentSearch): Promise<InsertResult> {
    return this.recentSearchRepository.insert(recentSearch_item);
  }

  // async updateRecentSearchItem(id: number, recentSearch_item: RecentSearch): Promise<UpdateResult> {
  //   const recentSearchList: RecentSearch[] = await this.recentSearchRepository.findBy({ id })
  //   if(recentSearchList && recentSearchList.length){
  //     return this.recentSearchRepository.update(id, recentSearch_item);
  //   }else{
  //     return new Promise<UpdateResult>((resolve, reject) => {
  //       //  resolve(null)
  //     })
  //   }
  // }

  async updateRecentSearchItem(id: number, recentSearch_item: RecentSearch): Promise<UpdateResult> {
    const rc= await this.recentSearchRepository.findOneBy({ id })
    if(rc){
      return this.recentSearchRepository.update(id, {...rc,...recentSearch_item});
    }else{
      return new Promise<UpdateResult>((resolve, reject) => {
        //  resolve(null)
      })
    }
  }




  async removeFromRecentSearch(recentSearch_id: number): Promise<DeleteResult> {
    return await this.recentSearchRepository.delete(recentSearch_id);
  }

  async delS():Promise<any> {
    var ab=await this.recentSearchRepository.find();
    for(var a of ab) {
      await this.recentSearchRepository.delete(a.id);
    }
    return [];

  }
  async clearSearch(user_id:number):Promise<any> {
   // console.log("asdsdf");
    var ab=await this.recentSearchRepository.findBy({"user_id":user_id});
    //console.log(ab);
    for(var a of ab) {
    //  console.log(a);
      await this.recentSearchRepository.delete(a.id);
    }
    return [];

  }



}