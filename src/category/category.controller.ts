import { Controller, Get, Param, Post, Put, Delete, Body, FileTypeValidator, ParseFilePipe, UploadedFile, UseInterceptors, Query } from '@nestjs/common';
import { CategoryService } from './category.service';
import { Categories } from './entities/category.entity';
import { DeleteResult, InsertResult, UpdateResult } from 'typeorm';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { ApiBearerAuth, ApiHeader } from '@nestjs/swagger';

@ApiHeader({
  name: 'userId',
})
@Controller()
@ApiBearerAuth()
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  /****************Category CRUD********************/
  @Get('readCategory')
  getCategory(): Promise<Categories[]> {
    return this.categoryService.getCategory();
  }
  @Get('AllCategory')
  GetAllCategory(): Promise<any> {
    return this.categoryService.ListAllCategory();
  }

  @Get('SubCategory')
  SubCategory(): Promise<any> {
    return this.categoryService.ListSubCategory();
  }
  
  // @Get('tax')
  // Tax(): Promise<any> {
  //   return this.categoryService.tax();
  // }


  @Get('Category__Search/:keyword')
  m2(@Param('keyword') name:string , @Query('items_per_page') n?: number,@Query('page_number') pgn?: number):Promise<any> {
    return this.categoryService.m2s(name,n,pgn);
  }
  


  @Get('readCategoryIteml/:id')
  getCategoryItem(@Param('id') category_id: number): Promise<Categories> {
    return this.categoryService.findOneCategoryItem(category_id);
  }
  @Post('addToCategory')
  addToCategory(@Body() category: Categories): Promise<InsertResult> {
    return this.categoryService.createCategoryItem(category);
  }

  @Get('findCategoryByLevel/:level')
  findgetcatlevel1(@Param('level') v: number): Promise<any> {
    return this.categoryService.findcatlevel1(v);
  }

  @Get('findChildrenByCatId/:CatId')
  fccr(@Param('CatId') v: number): Promise<any> { 
    return this.categoryService.fcc(v);
  }
  
  @Get('TreeByCatId/:CatId')
  fccr2(@Param('CatId') v: number): Promise<any> { 
    return this.categoryService.fcc2(v);
  }

  @Post('categories/upload')
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './files',
      filename: function (req, file, cb) {
        cb(null , 'Categories.csv');
      }
    })
  }))
  async uploadCategories(@UploadedFile(
    new ParseFilePipe({
      validators: [
        new FileTypeValidator({ fileType: 'csv' }),
      ],
    }),
  ) file: Express.Multer.File): Promise<InsertResult> {
    return this.categoryService.uploadCategories(file);
  }

  @Put('updateCategoryItem/:id')
  updateCategory(@Param('id') category_id: number, @Body() category:Categories): Promise<UpdateResult> {
    return this.categoryService.updateCategoryItem(category_id, category);
  }
  @Delete('removeFromCategory/:id')
  deleteCategory(@Param('id') category_id: number): Promise<any> {
    return this.categoryService.removeFromCategory(category_id);
  }
}
