import { Controller, Get, Param, Post, Put, Delete, Body, UploadedFile, UseInterceptors, ParseFilePipe, FileTypeValidator, Query, Header, Headers } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './entities/products.entity';
import { DeleteResult, InsertResult, UpdateResult } from 'typeorm';
import { ProductVarient } from './entities/productvarient.entity';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { ApiBearerAuth, ApiHeader, ApiOperation, ApiQuery } from '@nestjs/swagger';
import { ProductDto } from './GetProductsDto.dto';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import 'reflect-metadata';
import { PaginationParams } from 'src/utils/PaginationParams.dto';
import { Filter1 } from './Filter1.entity';
import { SetTrending } from './entities/SetTrending.entity';


@ApiHeader({
  name: 'userId',
})
@Controller()
@ApiBearerAuth()
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  /****************Products CRUD********************/

   
  @Post('filter1--category--brand--price')
  Filter1(@Headers("userId") user_id: number ,@Body() f1: Filter1): Promise<any> {
    return this.productsService.filter1(f1, user_id);
  }

   

    
@Get('products-updated-get-method')
async UpdatedgetProducts(@Query('items_per_page') n?: number,@Query('page_number') pgn?: number) {
return this.productsService.UpdatedGetProducts(n,pgn);
}


@Get('soldCount/:product_id')
async otcsr(@Param('product_id') prid:number) {
return this.productsService.getotcsr(prid);
}




@Get('giftCount/:product_id')
async Getgc(@Param('product_id') prid:number) {
return this.productsService.getGc(prid);
}



@Get('Product_Ranking')
async getBestProducts(@Query('items_per_page') n?: number,@Query('page_number') pgn?: number): Promise<any> {
  return this.productsService.findBestProducts(n,pgn);
}


@Get('Gift_Ranking')
async getGiftProducts(@Query('items_per_page') n?: number,@Query('page_number') pgn?: number): Promise<any> {
  return this.productsService.findGiftProducts(n,pgn);
}




  @Get('products')
async getProducts(@Headers('user_id') user_id:number ,@Query('items_per_page') n?: number,@Query('page_number') pgn?: number): Promise<any> {
  return this.productsService.findAllProducts(user_id,n,pgn);
}

@Get('product__Search/:keyword')
async m1(@Param('keyword') name:string , @Query('items_per_page') n?: number,@Query('page_number') pgn?: number):Promise<any> {
return this.productsService.m1s(name,n,pgn);
}


@Get('multi__Search__in_category_brand_product/:keyword')
async MultiSearchPbc(@Param('keyword') name:string , @Query('items_per_page') n?: number,@Query('page_number') pgn?: number):Promise<any> {
return this.productsService.multiSearchPbc(name,n,pgn);
}

  @Get('Products_By_Brand/:brandId')
  async getByBrand(@Param('brandId') brandId: number,@Query('items_per_page') n?: number,@Query('page_number') pgn?: number): Promise<Product[]> {
    return this.productsService.findByBrandWithDetails(brandId,n,pgn);
  }

  @Get('product/:id')
  getProduct(@Param('id') product_id: number): Promise<any> {
    return this.productsService.findOneProduct(product_id);
  }
  // @Get('product/brand/:id')
  // getProductsByBrand(@Param('id') brand_id: number): Promise<Product[]> {
  //   return this.productsService.findByBrand(brand_id);
  // }
  @Get('product/category/:id')
  getProductsByCategory(@Headers('user_id') user_id:number,@Param('id') cat_id: number,@Query('items_per_page') n?: number,@Query('page_number') pgn?: number): Promise<any> {
    return this.productsService.findByCategory(user_id,cat_id,n,pgn);
  }
  @Get('products/featured')
  getFeaturedProducts(@Query('items_per_page') n?: number,@Query('page_number') pgn?: number): Promise<any> {
    return this.productsService.getFeaturedProducts(n,pgn);
  }

  @Post('product')
  addProduct(@Body() product: Product): Promise<InsertResult> {
    return this.productsService.createProduct(product);
  }

  @Post('setTrending_Products')
  setTrending(@Body() product_ids: SetTrending): Promise<any> {
    return this.productsService.setTrendingProducts(product_ids);
  }

  @Get('Trending_Products')
  Trending(): Promise<any> {
    return this.productsService.getTrendingProducts();
  }

  
  @Post('reamoveTrending_Products')
  reamoveTrending(@Body() product_ids: SetTrending): Promise<any> {
    return this.productsService.reamoveTrendingProducts(product_ids);
  }


  
  // @Post('product')
  // addProduct(@Body() product: Product): Promise<InsertResult> {
  //   return this.productsService.createProduct(product);
  // }

  @Post('products/upload')
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './files',
      filename: function (req, file, cb) {
        cb(null , 'Products.csv');
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
    return this.productsService.uploadProducts(file);
  }
  
  @Put('product/:id')
  updateproduct(@Param('id') product_id: number, @Body() product:Product): Promise<UpdateResult> {
    return this.productsService.updateproduct(product_id, product);
  }
  @Delete('product/:id')
  deleteProduct(@Param('id') product_id: number): Promise<any> {
    return this.productsService.removeProduct(product_id);
  }

  /****************ProductVarient CRUD********************/
  @Get('productVarient/product/:product_id')
  getProductVarientByProduct(@Param('product_id') product_id: number,@Query('items_per_page') n?: number,@Query('page_number') pgn?: number): Promise<ProductVarient[]> {
    return this.productsService.findProductVarientsByProductId(product_id,n,pgn);
  }


  @Get('productsVarients')
  async readVarients(@Query('items_per_page') n?: number,@Query('page_number') pgn?: number): Promise<any> {
    return this.productsService.m3s(n,pgn);
  }
  




  @Get('productVarient/productVarient/:varient_id')
  getProductVarientByVarient(@Param('varient_id') varient_id: number): Promise<ProductVarient> {
    return this.productsService.findProductVarientByVarientId(varient_id);
  }
  @Post('productVarient')
  addProductVarient(@Body() productVarient: ProductVarient): Promise<InsertResult> {
    return this.productsService.createProductVarient(productVarient);
  }

  @Post('productVarient/upload')
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './files',
      filename: function (req, file, cb) {
        cb(null , 'ProductVarient.csv');
      }
    })
  }))
  async uploadProductVarient(@UploadedFile(
    new ParseFilePipe({
      validators: [
        new FileTypeValidator({ fileType: 'csv' }),
      ],
    }),
  ) file: Express.Multer.File): Promise<InsertResult> {
    return this.productsService.uploadProductVarient(file);
  }

  @Put('productVarient/:varient_id')
  updateproductVarient(@Param('varient_id') varient_id: number, @Body() ProductVarient:ProductVarient): Promise<UpdateResult> {
    return this.productsService.updateProductVarient(varient_id, ProductVarient);
  }
  @Delete('productVarient/:varient_id')
  deleteProductVarient(@Param('varient_id') varient_id: number): Promise<DeleteResult> {
    return this.productsService.removeProductVarient(varient_id);
  }

  //Stock availability
  @Get('products/stockAvailability')
  getstockAvailability(@Query('items_per_page') n?: number,@Query('page_number') pgn?: number): Promise<any> {
    // return this.productsService.getStockAvailablity();
    return this.productsService.findAllpv(n,pgn);
  }
  
}
/**
 * 
 * 
 * products...brands
 * productvarient...product
 * 
 * 
 */