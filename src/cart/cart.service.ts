import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';
import { Cart } from './entities/cart.entity';
import { Product } from 'src/products/entities/products.entity';
import { Pagination, Search } from 'src/globalHelper';
import { Favourites } from 'src/favourites/entities/Favourites.entity';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(Cart)
    private cartRepository: Repository<Cart>,
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
    @InjectRepository(Favourites)
    private favouritesRepository: Repository<Favourites>,

  ) {}

  /****************Carts CRUD********************/
  async getCart(user_id: number): Promise<any> {
    return await this.cartRepository.findBy({ user_id:user_id });
  }

//   {relations: {
//     Product: true,
// }}

  async getCartup(): Promise<any> {
    return await this.cartRepository.find();
  }


  // async CartSearch(name:string):Promise<any> {
  //   return await this.cartRepository.find();
  //   return Search(name,ab,n,page);
  // }



/**
 * 
  async findAllProducts(): Promise<any> {
    const products = await this.productsRepository.find();
    const pcs = [];
  
    for (const product of products) {
      const cs = await this.cartRepository.findOneCartItem({ cs_id: cs.cs_id });
      pcs.push({ ...product, cs });
    }
  
    return pcs;
  }
 * 
 * 
 * 
 */

  // async findchildrencart()

  async findAllpcs(uid:number): Promise<any> {
    const cs = await this.cartRepository.findBy({"user_id":uid});
    const pcs = [];
  
    for (const c1 of cs) {
      const ps = await this.productsRepository.findOneBy({ product_id: c1.product_id });
      const fv= await this.favouritesRepository.findOneBy({user_id:uid,prod_id:c1.product_id});
      if(fv) {
        ps.isFavourite=true;
      }
      pcs.push({  c1 , ...ps});
    }
  
    return pcs;
  }

  async findOneCartItem(cart_id: number): Promise<Cart> {
    return await this.cartRepository.findOneBy({ cart_id });
  }

  
  async findOneCartItem2(cart: Cart): Promise<any> {
    var [ab,cd]=await this.cartRepository.findAndCount({where:{product_id:cart.product_id,user_id:cart.user_id}});
    if(cd>0) return ab[0];
  }

  async createCartItem(cart_item: Cart): Promise<any> {
    var a=await this.cartRepository.find();
    var fg=0;
    if(a.length>0) {
    for(var h of a) {
      if((h.product_id==cart_item.product_id) && 
      (h.varient_id==cart_item.varient_id) &&
        (h.user_id==cart_item.user_id))  {
              console.log(h);
          fg=1;
          var idc=h.cart_id;
          cart_item.cart_id=idc;

          if(cart_item.qty>0) {
         // await this.cartRepository.delete(idc);
          await this.cartRepository.update(idc,cart_item); 
             }
              else if(cart_item.qty==0)
                    await this.cartRepository.delete(idc);
        }
              }  }

        if(fg==0)  {
          //cart_item.cart_id=a.length+1;
          console.log(cart_item);
          await this.cartRepository.insert(cart_item);
        }
        
        return await this.findAllpcs(cart_item.user_id)
        //  let updatedCart=this.cartRepository.findBy({user_id:cart_item.user_id});
        //  return updatedCart;
      }



  // async updateCartItem(cart_id: number, cart_item: Cart): Promise<UpdateResult> {
  //   const cartList: Cart[] = await this.cartRepository.findBy({ cart_id })
  //   if(cartList && cartList.length){
  //     return this.cartRepository.update(cart_id, cart_item);
  //   }else{
  //     return new Promise<UpdateResult>((resolve, reject) => {
  //       //  resolve(null)
  //     })
  //   }
  // }


  async updateCartItem(cart_id: number, cart_item: Cart): Promise<UpdateResult> {
    const existingCart = await this.cartRepository.findOneBy({ "cart_id":cart_id })
    if(existingCart){
      //console.log(existingCart);
      return this.cartRepository.update(cart_id, {...existingCart,...cart_item});
    }
    else{
      return new Promise<UpdateResult>((resolve, reject) => {
        //  resolve(null)
      })
    }
  }




  async removeFromCart(cart_id: number, user_id: number): Promise<any> {
    await this.cartRepository.delete(cart_id);
    return await this.findAllpcs(user_id);
  }

  async removeAllCartOfUser(user_id: number): Promise<any> {
      var ab=await this.cartRepository.findBy({"user_id":user_id});
      for(var a of ab) {
        await this.cartRepository.delete(a.cart_id);
      }
      return "your cart is empty";
  }

  
}