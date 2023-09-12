import { Controller, Get, Param, Post, Put, Delete, Body, FileTypeValidator, ParseFilePipe, UploadedFile, UseInterceptors, Query } from '@nestjs/common';
import { BrandService } from './brand.service';
import { Brand } from './entities/brand.entity';
import { DeleteResult, InsertResult, UpdateResult } from 'typeorm';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { ApiBearerAuth, ApiHeader } from '@nestjs/swagger';

@ApiHeader({
  name: 'userId',
})
@Controller()
@ApiBearerAuth()
export class BrandController {
  constructor(private readonly brandService: BrandService) {}

  /****************Brand CRUD********************/
  @Get('readBrand')
  GetBrand(): Promise<any> {
    return this.brandService.getBrand();
  }
  @Get('Brands__Search/:keyword')
  m1(@Param('keyword') name:string , @Query('items_per_page') n?: number,@Query('page_number') pgn?: number):Promise<any> {
    return this.brandService.BrandSearch(name,n,pgn);
  }
  @Get('readBrandItem/:id')
  getBrandItem(@Param('id') brand_id: number): Promise<Brand> {
    return this.brandService.findOneBrandItem(brand_id);
  }
  @Post('addToBrand')
  addToBrand(@Body() brand: Brand): Promise<InsertResult> {
    return this.brandService.createBrandItem(brand);
  }
  @Post('brands/upload')
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './files',
      filename: function (req, file, cb) {
        cb(null , 'Brands.csv');
      }
    })
  }))
  // async uploadProducts(@UploadedFile(
  //   new ParseFilePipe({
  //     validators: [
  //       new FileTypeValidator({ fileType: 'csv' }),
  //     ],
  //   }),
  // ) file: Express.Multer.File): Promise<InsertResult> {
  //   return this.brandService.uploadBrands(file);
  // }
  @Put('updateBrandItem/:id')
  updateBrand(@Param('id') brand_id: number, @Body() brand:Brand): Promise<UpdateResult> {
    return this.brandService.updateBrandItem(brand_id, brand);
  }
  @Delete('removeFromBrand/:id')
  deleteBrand(@Param('id') brand_id: number): Promise<any> {
    return this.brandService.removeFromBrand(brand_id);
  }
}
