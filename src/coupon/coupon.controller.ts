import { Controller, Get, Param, Post, Put, Delete, Body, FileTypeValidator, ParseFilePipe, UploadedFile, UseInterceptors, Query } from '@nestjs/common';
import { CouponService } from './coupon.service';
import { Coupon } from './entities/coupon.entity';
import { DeleteResult, InsertResult, UpdateResult } from 'typeorm';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { ApiBearerAuth, ApiHeader } from '@nestjs/swagger';

@ApiHeader({
  name: 'userId',
})
@Controller()
@ApiBearerAuth()
export class CouponController {
  constructor(private readonly couponService: CouponService) {}

  /****************Coupon CRUD********************/
  @Get('readCoupon')
  getCoupon(): Promise<any> {
    return this.couponService.getCoupon();
  }


  @Get('Coupon__Search/:keyword')
  m2(@Param('keyword') name:string , @Query('items_per_page') n?: number,@Query('page_number') pgn?: number):Promise<any> {
    return this.couponService.m2s(name,n,pgn);
  }
  



  @Get('readCouponItem/:id')
  getCouponItem(@Param('id') coupon_id: number): Promise<Coupon> {
    return this.couponService.findOneCouponItem(coupon_id);
  }
  @Post('addToCoupon')
  addToCoupon(@Body() coupon: Coupon): Promise<InsertResult> {
    return this.couponService.createCouponItem(coupon);
  }
  @Post('coupons/upload')
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './files',
      filename: function (req, file, cb) {
        cb(null , 'Coupons.csv');
      }
    })
  }))
  async uploadProducts(@UploadedFile(
    new ParseFilePipe({
      validators: [
        new FileTypeValidator({ fileType: 'csv' }),
      ],
    }),
  ) file: Express.Multer.File): Promise<InsertResult> {
    return this.couponService.uploadCoupons(file);
  }
  @Put('updateCouponItem/:id')
  updateCoupon(@Param('id') coupon_id: number, @Body() coupon:Coupon): Promise<UpdateResult> {
    return this.couponService.updateCouponItem(coupon_id, coupon);
  }
  @Delete('removeFromCoupon/:id')
  deleteCoupon(@Param('id') coupon_id: number): Promise<any> {
    return this.couponService.removeFromCoupon(coupon_id);
  }
}
