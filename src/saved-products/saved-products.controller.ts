import { InsertResult } from "typeorm";
import { SavedProducts } from "./SavedProducts.entity"

import { SavedProductsService } from "./saved-products.service"

import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

@Controller('saved-products')
export class SavedProductsController {
    constructor(private readonly SavedProductsService: SavedProductsService) {}

    
  @Get('SavedProducts/:user_id')
  async getProducts(@Param('user_id') user_id:number): Promise<any> {
    return this.SavedProductsService.getAllSavedProducts(user_id);
  }

  @Get('savedProductsDetails/:user_id')
  async getFavProducts(@Param('user_id') user_id:number): Promise<any> {
    return this.SavedProductsService.getSavedProducts(user_id);
  }

  

  @Post('addSavedProduct')
  addSavedProduct(@Body() dsp: SavedProducts): Promise<InsertResult> {
    console.log(dsp);
    return this.SavedProductsService.createSavedProduct(dsp);
  }


  @Delete('DeleteSavedProductBy_UserId_and_ProductId')
  deleteSavedProduct(@Body() dsp:SavedProducts): Promise<any> {
    const {saved_id, user_id , prod_id } = dsp;
    return this.SavedProductsService.deleteSavedProduct(user_id,prod_id);
  }
  



}
