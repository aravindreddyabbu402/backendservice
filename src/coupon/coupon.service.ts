import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { readFileSync } from 'fs';
import { DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';
import { Coupon } from './entities/coupon.entity';
import { parse } from 'papaparse';
import { Pagination, Search } from 'src/globalHelper';

@Injectable()
export class CouponService {
  constructor(
    @InjectRepository(Coupon)
    private couponRepository: Repository<Coupon>,
  ) {}

  /****************Coupons CRUD********************/
  async getCoupon(): Promise<any> {
    return await this.couponRepository.find();
   
  }


  
  async m2s(name:string,n?: number, page?: number):Promise<any> {
    var ab=await this.couponRepository.find();
    return Search(name,ab,n,page);
  }


  findOneCouponItem(coupon_id: number): Promise<Coupon> {
    return this.couponRepository.findOneBy({ coupon_id });
  }

  createCouponItem(coupon_item: Coupon): Promise<InsertResult> {
    return this.couponRepository.insert(coupon_item);
  }

  async uploadCoupons(file: Express.Multer.File): Promise<InsertResult>{
    const csvFile = readFileSync('./files/Coupons.csv');
    const coupons: Coupon[] = await parse(csvFile.toString(), {
      header: true,
      skipEmptyLines: true,
      transformHeader: (header) => header.toLowerCase().replace('#', '').trim(),
      complete: (results) => results.data
    }).data
    return this.couponRepository.insert(coupons);
  }

  // async updateCouponItem(coupon_id: number, coupon_item: Coupon): Promise<UpdateResult> {
  //   const couponList: Coupon[] = await this.couponRepository.findBy({ coupon_id })
  //   if(couponList && couponList.length){
  //     return this.couponRepository.update(coupon_id, coupon_item);
  //   }else{
  //     return new Promise<UpdateResult>((resolve, reject) => {
  //       //  resolve(null)
  //     })
  //   }
  // }


  async updateCouponItem(coupon_id: number, coupon_item: Coupon): Promise<UpdateResult> {
    const existingCoupon= await this.couponRepository.findOneBy({ coupon_id })
    if(existingCoupon){
      return this.couponRepository.update(coupon_id, {...existingCoupon,...coupon_item});
    }else{
      return new Promise<UpdateResult>((resolve, reject) => {
        //  resolve(null)
      })
    }
  }

  async removeFromCoupon(coupon_id: number): Promise<any> {
     await this.couponRepository.delete(coupon_id);
     return await this.couponRepository.find();
  }
}