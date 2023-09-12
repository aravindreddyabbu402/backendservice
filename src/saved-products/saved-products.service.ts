

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/products/entities/products.entity';
import { DeleteResult, InsertResult, Repository } from 'typeorm';
import { Pagination } from 'src/globalHelper';
import { SavedProducts } from './SavedProducts.entity';
import { Cart } from 'src/cart/entities/cart.entity';

@Injectable()
export class SavedProductsService {

    
  constructor(

    @InjectRepository(SavedProducts)
    private SavedProductsRepository: Repository<SavedProducts>,

    @InjectRepository(Product)
    private productsRepository: Repository<Product>,

    @InjectRepository(Cart)
    private cartRepository: Repository<Cart>,
   
  ) {}

  async getAllSavedProducts(user_id:number): Promise<any> {
    return await this.SavedProductsRepository.findBy({user_id:user_id});
  }

  async getSavedProducts(user_id:number): Promise<any> {
    var results=await this.SavedProductsRepository.findBy({"user_id":user_id});
    var cd=[]; 
    for(var a of results) {
      var ef=await this.productsRepository.findOneBy({"product_id":a.prod_id});
      cd.push({"Saved_Product":a,"product":ef});
    }
   return cd;
  }
  


  
 async createSavedProduct(sp:SavedProducts): Promise<any> {
    var [ef, cd] = await this.cartRepository.findAndCount({where:{product_id:sp.prod_id,user_id:sp.user_id}});
     if(ef.length>0) await this.cartRepository.delete(ef[0].cart_id);
     var [ab, gh]=await this.SavedProductsRepository.findAndCount({where:{prod_id:sp.prod_id,user_id:sp.user_id}});
     if (gh>0) return "duplicate entry";
    else return await this.SavedProductsRepository.insert(sp);
  }




  async  deleteSavedProduct(uid:number,prod_id:number): Promise<any> { 
        await this.SavedProductsRepository.delete({
            user_id: uid,
            prod_id: prod_id
        });
        const results =await this.getSavedProducts(uid);
        return results;
  }


 
}
