import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { readFileSync } from 'fs';
import { DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';
import { Brand } from './entities/brand.entity';
import { parse } from 'papaparse';
import { Pagination, Search } from 'src/globalHelper';

@Injectable()
export class BrandService {
  static brandRepository: any;
  constructor(
    @InjectRepository(Brand)
    private brandRepository: Repository<Brand>,
  ) {}

  /****************Brands CRUD********************/
 async getBrand(): Promise<any> {
    return await this.brandRepository.find();
    
  }

  async BrandSearch(name:string,n?: number, page?: number):Promise<any> {
    var ab=await this.brandRepository.find();
   return Search(name,ab,n,page);
  }

  findOneBrandItem(brand_id: number): Promise<Brand> {
    return this.brandRepository.findOneBy({ brand_id });
  }

 async createBrandItem(brand_item: Brand): Promise<InsertResult> {
    //console.log('asdfgh',brand_item);
    console.log(await this.brandRepository.find());
    return this.brandRepository.insert(brand_item);
  }

  async uploadBrands(file: Express.Multer.File): Promise<InsertResult>{
    const csvFile = readFileSync('./files/Brands.csv');
    const brands: Brand[] = await parse(csvFile.toString(), {
      header: true,
      skipEmptyLines: true,
      transformHeader: (header) => header.toLowerCase().replace('#', '').trim(),
      complete: (results) => results.data
    }).data
    return this.brandRepository.insert(brands);
  }

  // async updateBrandItem(brand_id: number, brand_item: Brand): Promise<UpdateResult> {
  //   const brandList: Brand[] = await this.brandRepository.findBy({ brand_id })
  //   if(brandList && brandList.length){
  //     return this.brandRepository.update(brand_id, brand_item);
  //   }else{
  //     return new Promise<UpdateResult>((resolve, reject) => {
  //       //  resolve(null)
  //     })
  //   }
  // }

  async updateBrandItem(brand_id: number, brand_item: Brand): Promise<UpdateResult> {
    const existingBrand= await this.brandRepository.findOneBy({ brand_id })
    if(existingBrand){
      return this.brandRepository.update(brand_id,{...existingBrand,...brand_item});
    }else{
      return new Promise<UpdateResult>((resolve, reject) => {
        //  resolve(null)
      })
    }
  }

  async removeFromBrand(brand_id: number): Promise<any> {
    await this.brandRepository.delete(brand_id);
    return await this.brandRepository.find();
  }
}