import { Injectable } from '@nestjs/common';
import { InjectRepository} from '@nestjs/typeorm';
import { DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';
import { Orders } from './entities/orders.entity';
import { Product } from 'src/products/entities/products.entity';
import { ProductVarient } from 'src/products/entities/productvarient.entity';
import { Pagination, Search } from 'src/globalHelper';
import { ProductsService } from 'src/products/products.service'
import {  MoreThan } from 'typeorm';
import { Cart } from 'src/cart/entities/cart.entity';
import { Users } from 'src/user/entities/user.entity';


@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Orders)
    private ordersRepository: Repository<Orders>,
    @InjectRepository(Users)
    private userRepository: Repository<Users>,
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
    @InjectRepository(Cart)
    private cartRepository: Repository<Cart>,
    @InjectRepository(ProductVarient)
    private productvarientRepository: Repository<ProductVarient>,
    private readonly productsService: ProductsService
  ) {}

  /****************Orders CRUD********************/


  // async findIncreasedPercent(dt:Date):Promise<any> {
  //   const [results, total] = await this.ordersRepository.findAndCount({
  //     where: { order_date: MoreThan(new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000)) },


  //     order: { order_id: 'DESC' },
     
  //     });

  //     return total;


  // }


async findIncreasedPercent(): Promise<number> {
  const oneWeekAgo = new Date(new Date().getTime() - 7* 24 * 60 * 60 * 1000);

  const total = await this.ordersRepository.count({
    where: { order_date: MoreThan(oneWeekAgo) },
  });

  // var qw=100;
  const [rows, tn] = await this.ordersRepository.findAndCount({

    order: { order_id: 'DESC' },
    // take:qw
    });
  return (total/((tn-total)>0?(tn-total):1))*100;
  
}




async findLastWeekOrders(): Promise<any> {
  const oneWeekAgo = new Date(new Date().getTime() - 7* 24 * 60 * 60 * 1000);
  const [abc , ert] = await this.ordersRepository.findAndCount({
    where: { order_date: MoreThan(oneWeekAgo) }
  });
return abc;
  
}



async pp1(): Promise<number> {
  const oneWeekAgo = new Date(new Date().getTime() - 7* 24 * 60 * 60 * 1000);
  const total = await this.ordersRepository.count({
    where: { order_date: MoreThan(oneWeekAgo),order_status:"Pending" },
  });

  // var qw=100;
  const [rows, tn] = await this.ordersRepository.findAndCount({
    where: { order_status:"Pending" },
    order: { order_id: 'DESC' },
    // take:qw
    });
  return (total/((tn-total)>0?(tn-total):1))*100;
  
}

    

async pp2(): Promise<number> {
  const oneWeekAgo = new Date(new Date().getTime() - 7* 24 * 60 * 60 * 1000);
  const total = await this.ordersRepository.count({
    where: { order_date: MoreThan(oneWeekAgo),isCancelled:true },
  });

  // var qw=100;
  const [rows, tn] = await this.ordersRepository.findAndCount({
    where: { isCancelled:true },
    order: { order_id: 'DESC' },
    // take:qw
    });
  return (total/((tn-total)>0?(tn-total):1))*100;
  
}




      async dashboardOrders(): Promise<any> { 
      const [ab,qw]=await this.ordersRepository.findAndCount({order:{"order_id":"DESC"}});
      var cd=[];
      for (var a of ab) {
        // console.log("a.user_id",a.user_id);
        var usr=await this.userRepository.findOneBy({"id":a.user_id});
        // console.log(usr.name);
        if(usr) cd.push({...a,"user_details":(usr.name+" - "+usr.user_phone)});
      }
      return cd;
      }
    




  async findAllOrders3(status: string,n?: number, page?: number): Promise<any> {
   
    const  limit=n;
    const skip = (page - 1) * limit;
    const [results, total] = await this.ordersRepository.findAndCount({
      where:{order_status:status},

      order: { order_id: 'DESC' },
      //should be........order: { order_placed_timestamp: 'DESC' },
      skip,
      take: limit,
      });

      return results;

  }


  async findAllOrders2(n?: number, page?: number): Promise<any> {
   
    const  limit=n;
    const skip = (page - 1) * limit;
    const [results, total] = await this.ordersRepository.findAndCount({

      order: { order_id: 'DESC' },
      //should be........order: { order_placed_timestamp: 'DESC' },
      skip,
      take: limit,
      });

      return results;

  }





  async findAllOrders(user_id: number,n?: number, page?: number): Promise<any> {
    // var cd=await this.ordersRepository.findBy({"user_id":user_id,"isPlaced":true});
    // var cd=await this.ordersRepository.findBy({"user_id":user_id});
    // var cd=await this.ordersRepository.find();
    
    // console.log('zxcvbnm',cd,user_id);
    // var cd=await this.ordersRepository.find({user_id});
    // return Pagination(cd,n,page);
    const  limit=n;
    const skip = (page - 1) * limit;
    const [results, total] = await this.ordersRepository.findAndCount({
      where:{"user_id":user_id,"isPlaced":true, isCancelled:false},
      // where:{"user_id":user_id},

      order: { order_id: 'DESC' },
      //should be........order: { order_placed_timestamp: 'DESC' },
      skip,
      take: limit,
      });

      return results;

  }

  async findTotalOrders(user_id: number,n?: number, page?: number): Promise<any> {
    // var cd=await this.ordersRepository.findBy({"user_id":user_id,"isPlaced":true});
    // var cd=await this.ordersRepository.findBy({"user_id":user_id});
    // var cd=await this.ordersRepository.find();
    
    // console.log('zxcvbnm',cd,user_id);
    // var cd=await this.ordersRepository.find({user_id});
    // return Pagination(cd,n,page);
    const  limit=n;
    const skip = (page - 1) * limit;
    const [results, total] = await this.ordersRepository.findAndCount({
      // where:{"user_id":user_id,"isPlaced":true, isCancelled:false},
      where:{"user_id":user_id},

      order: { order_id: 'DESC' },
      //should be........order: { order_placed_timestamp: 'DESC' },
      skip,
      take: limit,
      });

      return results;

  }

  
async find5RecentOrderedProductsOfUser(user_id: number):Promise<any> {
  var ab=await this.findAllOrders(user_id,5,1);var c2=0;var arr=[];
  for(var a of ab) {
    var c=JSON.parse(a.products_and_varients);
    // var c1=c.length;
    if(c2<5) {
      for(var c3 of c) {
        arr.push(c3.product_id);
        c2++;if(c2==5) break;
      }
    }
    if(c2==5) break;
    
  }

  let brr=[];
  for(var c4 of arr) {
    var p1=await this.productsRepository.findOneBy({"product_id":c4});
    brr.push(p1);
  }
  brr = await this.productsService.populateFavouriteCartCountAndBrandDetails(brr, user_id)
  return brr;

}

  async m2s(name:string,n?: number, page?: number):Promise<any> {
    var ab=await this.ordersRepository.find();
    return Search(name,ab,n,page);
    
  }

  async findOneOrder(order_id:number):Promise<any> {
    var ab=await this.ordersRepository.findOneBy({"order_id":order_id});
    console.log(ab.products_and_varients);
    var pv=JSON.parse(ab.products_and_varients);
    var pr=[];
    for(var k1 of pv) {
      var q1=await this.productsRepository.findOneBy({"product_id":k1.product_id});
      q1.cartCount=k1.count;
        // var str = k1.varients+"";
        // console.log('zxcvb',str);
        // var arr = str.split(",").map(function(item) {
        //     return parseInt(item, 10);
        //   });
        //   var q2=[];
        //   for (var k2 of arr) {
        //       q2.push(await this.productvarientRepository.findOneBy({"varient_id":k2}));
        //   }
        // var q3={...q1,"varients":q2}
        pr.push(q1);
      
    }
    return ({...ab,"products":pr});
  }




  // findOneOrder(order_id:number):Promise<Orders> {
  //   return this.ordersRepository.findOneBy({"order_id":order_id})
  // }


  // async findOneOrder(order_id: number): Promise<any> {

  //   var a=await this.ordersRepository.findOneBy({"order_id":order_id});
   
  //   var str = a.product_id;
  //   var arr = str.split(",").map(function(item) {
  //     return parseInt(item, 10);
  //         });
  //         var brr=[];
    
  //         for(var y of arr) {
  //             brr.push(await this.productsRepository.findOneBy({"product_id":y}));
  //         }
  //         var abc={...a,"products":brr};
    
  //   return abc;
  // }

  async findOrderByStatus(order_status: string,user_id: number): Promise<Orders[]> {
      const [orders, count] = await this.ordersRepository.findAndCount({
        where:{"user_id":user_id, "status": order_status},
        order: { order_id: 'DESC' }
        })
      return orders;
  }

  
  async createOrder(order: Orders): Promise<any> {
    var ord=order;
    ord.delivery_date=order.order_date;
    var createdOrder=await this.ordersRepository.insert(ord);
      var ct=await this.ordersRepository.findOneBy({"order_id":createdOrder.generatedMaps[0].order_id});
      var pv=JSON.parse((ct.products_and_varients?ct.products_and_varients:("")));
      if(pv)  for(var b of pv) {
          var sct=await this.productsService.getotcsr(b.product_id);
          var pr=await this.productsRepository.findOneBy({"product_id":b.product_id});
          var pr2=pr;
          var gct=await this.productsService.getGc(b.product_id);
          if(ct.is_gift==true) {
            pr.gift_times_count=gct;
          }
          pr.ordered_times_count=sct;
          await this.productsRepository.update(b.product_id,{...pr2,...pr});
        }

      return createdOrder;
    }



  async updateorder(order_id: number, order: Orders): Promise<UpdateResult> {
    const existingOrder= await this.ordersRepository.findOneBy({ order_id });
    // console.log("asdfghjk");

    var ct=await this.ordersRepository.findOneBy({"order_id":order_id});
    var pv=JSON.parse(ct.products_and_varients);
      for(var b of pv) {
        var sct=await this.productsService.getotcsr(b.product_id);
        // console.log("azxcvb",sct);
        var pr=await this.productsRepository.findOneBy({"product_id":b.product_id});
        var pr2=pr;
        pr.ordered_times_count=sct;
        var gct=await this.productsService.getGc(b.product_id);
          if(ct.is_gift==true) {
            pr.gift_times_count=gct;
          }
        await this.productsRepository.update(b.product_id,{...pr2,...pr});
      }

    if(existingOrder){
      return this.ordersRepository.update(order_id, {...existingOrder,...order});
    }else{
      return new Promise<UpdateResult>((resolve, reject) => {
        //  resolve(null)
      })
    }




  }

  async removeOrder(order_id: number): Promise<DeleteResult> {

    var ct=await this.ordersRepository.findOneBy({"order_id":order_id});
    var pv=JSON.parse(ct.products_and_varients);
      for(var b of pv) {
        var sct=await this.productsService.getotcsr(b.product_id);
        var pr=await this.productsRepository.findOneBy({"product_id":b.product_id});
        var pr2=pr;
        pr.ordered_times_count=sct;
        var gct=await this.productsService.getGc(b.product_id);
          if(ct.is_gift==true) {
            pr.gift_times_count=gct;
          }
        await this.productsRepository.update(b.product_id,{...pr2,...pr});
      }

    return await this.ordersRepository.delete(order_id);
  }

}