import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { readFileSync } from 'fs';
import { DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';
import { DealProduct as Deal } from './entities/deal.entity';
import { parse } from 'papaparse';
import { Pagination, Search } from 'src/globalHelper';

@Injectable()
export class DealService {
  constructor(
    @InjectRepository(Deal)
    private dealRepository: Repository<Deal>,
  ) {}

  /****************Deals CRUD********************/
  async getDeal(): Promise<any> {
  return await this.dealRepository.find();
   
  }

  async m2s(name:string,n?: number, page?: number):Promise<any> {
    var ab=await this.dealRepository.find();
  return Search(name,ab,n,page);
  }

  findOneDealItem(deal_id: number): Promise<Deal> {
    return this.dealRepository.findOneBy({ deal_id });
  }

  createDealItem(deal_item: Deal): Promise<InsertResult> {
    return this.dealRepository.insert(deal_item);
  }

  async uploadDeals(file: Express.Multer.File): Promise<InsertResult>{
    const csvFile = readFileSync('./files/Deals.csv');
    const deals: Deal[] = await parse(csvFile.toString(), {
      header: true,
      skipEmptyLines: true,
      transformHeader: (header) => header.toLowerCase().replace('#', '').trim(),
      complete: (results) => results.data
    }).data
    return this.dealRepository.insert(deals);
  }

  // async updateDealItem(deal_id: number, deal_item: Deal): Promise<UpdateResult> {
  //   const dealList: Deal[] = await this.dealRepository.findBy({ deal_id })
  //   if(dealList && dealList.length){
  //     return this.dealRepository.update(deal_id, deal_item);
  //   }else{
  //     return new Promise<UpdateResult>((resolve, reject) => {
  //       //  resolve(null)
  //     })
  //   }
  // }

  async updateDealItem(deal_id: number, deal_item: Deal): Promise<UpdateResult> {
    const existingDeal= await this.dealRepository.findOneBy({ deal_id })
    if(existingDeal){
      return await this.dealRepository.update(deal_id, {...existingDeal,...deal_item});
    }else{
      return new Promise<UpdateResult>((resolve, reject) => {
        //  resolve(null)
      })
    }
  }

  async removeFromDeal(deal_id: number): Promise<any> {
    await this.dealRepository.delete(deal_id);
    return await this.dealRepository.find();
  }
}