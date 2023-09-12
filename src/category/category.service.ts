import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { readFileSync } from 'fs';
import { DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';
import { Categories } from './entities/category.entity';
import { parse } from 'papaparse';
import { Pagination, Search } from 'src/globalHelper';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Categories)
    private categoryRepository: Repository<Categories>,
  ) {}

  /****************Categorys CRUD********************/
  /*************** tree chaining of categories...................
   * 
   * cat_id=0===parent for all level=1 categories.......
   * physically it doesnt exist....
   * .......and we shoudn't insert any category with cat_id=0
   *  
   * .... level=1===no parent,  ........or parent=0 
   * ....level=2===has a parent
   * .....level=3===has a parent =p...and p has a parent= pp
   * 
   *      *********************/
  async getCategory(): Promise<any> {
    return await this.categoryRepository.findBy({parent:0});
  }
  

  async ListAllCategory(): Promise<any> {
    // return await this.categoryRepository.findBy({parent:0});
    // return 0;
    var ab=await this.categoryRepository.find();var abc,pr,cc=[];
    for(var a of ab) {
            if(a.parent==0) abc={...a,"parent_title":"NO PARENT"};
            else {
              pr=await this.categoryRepository.findOneBy({"cat_id":a.parent});
             if(pr) abc={...a,"parent_title":pr.title};
                }
          
          cc.push(abc);
    }
    return cc;
  }


  async ListSubCategory(): Promise<any> {
    // return await this.categoryRepository.findBy({parent:0});
    // return 0;
    var ab=await this.categoryRepository.find();var abc,pr,cc=[];
    for(var a of ab) {
            if(a.parent>0) {
              pr=await this.categoryRepository.findOneBy({"cat_id":a.parent});
             if(pr) {
              // console.log(pr);
              
              abc={...a,"parent_title":pr.title};
              cc.push(abc); }
                }
    }
    return cc;
  }

  
  async m2s(name:string,n?: number, page?: number):Promise<any> {
    var ab=await this.categoryRepository.find();
   return Search(name,ab,n,page);
  }

  findOneCategoryItem(cat_id: number): Promise<Categories> {
    return this.categoryRepository.findOneBy({ cat_id });
  }


   async findcatlevel1(v:number): Promise <any> {
    var a=await this.categoryRepository.find();
  var ar=[];
   for(var ca1 of a) {
    if(ca1.level==v) {
      ar.push(ca1);
    }
  }
  
  return ar;
  }

  async fcc(v:number): Promise <any> {
    var b=await this.categoryRepository.find();
  var nr=[];
   for(var cat of b) {
    if(cat["parent"]==v) {
      nr.push(cat);
    }
  }
  return nr;
  }

  async  fetchDescendants(currentCatId:number, descendants:any) {
    const childCats = await this.fcc(currentCatId);
  
    for (const childCat of childCats) {
      descendants.push(childCat);
      await this.fetchDescendants(childCat.cat_id, descendants);
    }
  }
  
  async  fcc2(catId:number) {
    const descendants = [];
    await this.fetchDescendants(catId, descendants);
    return descendants;
  }
  
  
    
  
  


  
  // async f22(cat_id:number): Promise <Categories[]> {
  //   var a=await this.categoryRepository.find();
  //   var br=[];
  //   for (var c1 of a) {
  //     if(c1.parent==cat_id) {
  //       br.push(c1);
  //     }
  //   }
  //   return br;
  //   }


  
  
  



  // async findAllProducts(): Promise<Product[]> {
  //   const products = await this.productsRepository.find();
  //   const productsWithBrands = [];
  
  //   for (const product of products) {
  //     const brand = await this.brandRepository.findOneBy({ brand_id: product.brand_id });
  //     productsWithBrands.push({ ...product, brand });
  //   }
  
  //   return productsWithBrands;
  // }





  createCategoryItem(category_item: Categories): Promise<InsertResult> {
    return this.categoryRepository.insert(category_item);
  }

  async uploadCategories(file: Express.Multer.File): Promise<InsertResult>{
    const csvFile = readFileSync('./files/Categories.csv');
    const categories: Categories[] = await parse(csvFile.toString(), {
      header: true,
      skipEmptyLines: true,
      transformHeader: (header) => header.toLowerCase().replace('#', '').trim(),
      complete: (results) => results.data
    }).data
    return this.categoryRepository.insert(categories);
  }

  // async updateCategoryItem(cat_id: number, category_item: Categories): Promise<UpdateResult> {
  //   const categoryList: Categories[] = await this.categoryRepository.findBy({ cat_id })
  //   if(categoryList && categoryList.length){
  //     return this.categoryRepository.update(cat_id, category_item);
  //   }else{
  //     return new Promise<UpdateResult>((resolve, reject) => {
  //       //  resolve(null)
  //     })
  //   }
  // }

  async updateCategoryItem(cat_id: number, category_item: Categories): Promise<UpdateResult> {
    const existingCategory = await this.categoryRepository.findOneBy({ cat_id })
    if(existingCategory){
      return this.categoryRepository.update(cat_id, {...existingCategory,...category_item});
    }else{
      return new Promise<UpdateResult>((resolve, reject) => {
        //  resolve(null)
      })
    }
  }

  async removeFromCategory(category_id: number): Promise<any> {
   await this.categoryRepository.delete(category_id);
    return await this.getCategory();
  }
}