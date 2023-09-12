import { CategoryService } from './../category/category.service';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { readFileSync } from 'fs';
import { parse } from 'papaparse';
import { DeleteResult, InsertResult, Repository, UpdateResult, FindOneOptions, Between } from 'typeorm';
import { Product } from './entities/products.entity';
import { ProductVarient } from './entities/productvarient.entity';
import { Brand } from 'src/brand/entities/brand.entity';
import { BrandController } from 'src/brand/brand.controller';
import { BrandService } from 'src/brand/brand.service';
import { BrandModule } from 'src/brand/brand.module';
import { BrandRepository } from 'src/brand/BrandRepository';
import { Categories } from 'src/category/entities/category.entity';
import { Cart } from 'src/cart/entities/cart.entity';
import { ProductRating } from 'src/productRating/entities/productRating.entity';
import { Orders } from 'src/orders/entities/orders.entity';
import { AdSearch, Pagination, Search } from 'src/globalHelper';
import { PaginationParams } from 'src/utils/PaginationParams.dto';
import { Favourites } from 'src/favourites/entities/Favourites.entity';
import { Filter1 } from './Filter1.entity';
import { In, LessThanOrEqual, MoreThanOrEqual, Like } from 'typeorm';
import { SetTrending } from './entities/SetTrending.entity';
// import { ElasticsearchService } from '@nestjs/elasticsearch';


@Injectable()
export class ProductsService {


  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
    @InjectRepository(Favourites)
    private FavouritesRepository: Repository<Favourites>,
    @InjectRepository(Orders)
    private ordersRepository: Repository<Orders>,
    @InjectRepository(ProductRating)
    private productRatingRepository: Repository<ProductRating>,
    @InjectRepository(Brand)
    private brandRepository: Repository<Brand>,
    @InjectRepository(Categories)
    private categoryRepository: Repository<Categories>,
    @InjectRepository(Cart)
    private cartRepository: Repository<Cart>,
    @InjectRepository(ProductVarient)
    private productvarientRepository: Repository<ProductVarient>,
    private brandService: BrandService,
    private CategoryService: CategoryService

  ) { }

  /****************Products CRUD********************/


  async getotcsr(prid: number): Promise<any> {
    var ct = await this.ordersRepository.findBy({ "isDelivered": true }); var ctr = 0;
    var pd = await this.productsRepository.findOneBy({ "product_id": prid });
    for (var a of ct) {
      if (a.products_and_varients) {
        var pv = JSON.parse(a.products_and_varients);
        console.log("nnnnn", pv)
        if (pv) {
          for (var b of pv) {
            if (b.product_id == prid) {
              ctr = ctr + b.count;
            }
          }
        }
      }
    }
    return ctr;
  }

  async getTrendingProducts(): Promise<any> {
    const [qw, er] = await this.productsRepository.findAndCount({ where: { "trending_rank": 1 } });
    return qw;
  }



  async getGc(prid: number): Promise<any> {
    var ct = await this.ordersRepository.findBy({ "isPlaced": true, "isCancelled": false, "is_gift": true }); var ctr = 0;
    var pd = await this.productsRepository.findOneBy({ "product_id": prid });
    for (var a of ct) {
      if (pv) {
        var pv = JSON.parse(a.products_and_varients);
        for (var b of pv) {
          if (b.product_id == prid) {
            ctr = ctr + b.count;
          }
        }
      }
    }
    return ctr;
  }

async filter1(f1: Filter1, user_id: number): Promise<any> {
  if(f1.keyword) {
    var prs1=await this.multiSearchPbc(f1.keyword,50,1);
  }


    const whereClause: any = {};
    if (f1.keyword) {
      whereClause.product_name = In(prs1.map((item) => item.product_name));
    }



    if (f1.rating) {
      whereClause.ratingValue = f1.rating;
    }

    if (f1.brands) {
      const brandIds = f1.brands.split(',').map(Number);
      whereClause.brand_id = In(brandIds);
    }

    if (f1.categories) {
      const categoryIds = f1.categories.split(',').map(Number);
      whereClause.cat_id = In(categoryIds);
    }

    if (f1.minPrice && f1.maxPrice) {
      whereClause.price = Between(f1.minPrice, f1.maxPrice);
    } else if (f1.minPrice) {
      whereClause.price = MoreThanOrEqual(f1.minPrice);
    } else if (f1.maxPrice) {
      whereClause.price = LessThanOrEqual(f1.maxPrice);
    }

  const sr1 = await this.productsRepository.find({
    where: whereClause,
    take: 50,
  });

    return await this.populateFavouriteCartCountAndBrandDetails(sr1, user_id);
  }




  async UpdatedGetProducts(n?: number, page?: number): Promise<any> {
    const limit = n;
    const skip = (page - 1) * limit;
    const [results, total] = await this.productsRepository.findAndCount({
      skip,
      take: limit,
    });

    return {
      results,
      page,
      limit,
      total,
    };
  }


  async findBestProducts(n?: number, page?: number): Promise<any> {
    const limit = n;
    const skip = (page - 1) * limit;
    const [results, total] = await this.productsRepository.findAndCount({
      order: { ordered_times_count: "DESC" },
      skip,
      take: limit,
    });
    return results;
  }

  async setTrendingProducts(pr_ids: SetTrending): Promise<any> {
    var pr2 = pr_ids.setTrendingProducts;
    var arr = pr2.split(",").map(function (item) {
      return parseInt(item, 10);
    });
    for (var a of arr) {
      var pr = await this.productsRepository.findOneBy({ product_id: a });
      await this.productsRepository.update(a, { ...pr, "trending_rank": 1 });
    }
    const [qw, er] = await this.productsRepository.findAndCount({ where: { "trending_rank": 1 } });
    return qw;
  }



  async reamoveTrendingProducts(pr_ids: SetTrending): Promise<any> {
    var pr2 = pr_ids.setTrendingProducts;
    var arr = pr2.split(",").map(function (item) {
      return parseInt(item, 10);
    });
    for (var a of arr) {
      var pr = await this.productsRepository.findOneBy({ product_id: a });
      if (pr) await this.productsRepository.update(a, { ...pr, "trending_rank": 99999 });
    }
    const [qw, er] = await this.productsRepository.findAndCount({ where: { "trending_rank": 1 } });
    return qw;
  }



  async findGiftProducts(n?: number, page?: number): Promise<any> {
    const limit = n;
    const skip = (page - 1) * limit;
    const [results, total] = await this.productsRepository.findAndCount({
      order: { gift_times_count: "DESC" },
      skip,
      take: limit,
    });

    // return results.filter(el=>el.gift_times_count>0);
    return results;

  }





  async populateFavouriteCartCountAndBrandDetails(results: Product[], user_id: number): Promise<Product[]> {
    var UpdatedProductList = [];
    for (var product of results) {
      var b1 = await this.FavouritesRepository.findOneBy({ "prod_id": product.product_id, "user_id": user_id });
      if (b1) {
        product.isFavourite = true;
      }
      var b2 = await this.cartRepository.findOneBy({ "user_id": user_id, "product_id": product.product_id });
      if (b2) {
        product.cartCount = b2.qty;

      }
      var b3 = await this.brandRepository.findOneBy({ "brand_id": product.brand_id });
      if (b3) {
        UpdatedProductList.push({ ...product, "BRAND": b3 })
      }
      else UpdatedProductList.push(product);
    }
    return UpdatedProductList;
  }

  async findAllProducts(user_id: number, n?: number, page?: number): Promise<any> {
    const limit = n;
    const skip = (page - 1) * limit;
    var [results, total] = await this.productsRepository.findAndCount({
      skip,
      take: limit,
    });
    return await this.populateFavouriteCartCountAndBrandDetails(results, user_id);
  }

  async m1s(name: string, n?: number, page?: number): Promise<any> {
    var ab = await this.productsRepository.find(); var aby = [];
    for (var y of ab) {
      var yb = await this.brandRepository.findOneBy({ brand_id: y.brand_id });
      aby.push({ ...y, "brand_details": yb })
    }
    return Search(name, aby, n, page);
  }


  async r1(cats: any) {
    var assoc_cats = [];

    for (var qws of cats) {
      var t1 = await this.CategoryService.fcc(qws.cat_id);

      if (t1.length > 0) {
        var child_cats = await this.r1(t1);
        assoc_cats = assoc_cats.concat(child_cats);
      }

      assoc_cats.push(qws);
    }
    return assoc_cats;
  }




  removeDuplicates(arrays: any) {
    let result = [];
    let seen = new Set();
    arrays.forEach(array => {
      array.forEach(item => {

        if (!seen.has(item.product_id)) {

          seen.add(item.product_id);
          result.push(item);
        }
      });
    });

    return result;
  }

  async multiSearchPbc(name: string, n?: number, page?: number): Promise<any> {

    let abp = [];
    let bps = [];
    let products = [];
    const categories = await this.categoryRepository.find({
      where: {
        title: Like(`%${name}%`)
      },
      take: n,
    });

    var cats2 = await this.r1(categories);

    for (var i of cats2) {
      var zx = await this.productsRepository.findBy({ "cat_id": i.cat_id, });
      abp = [...abp, ...zx];
    }

    if(abp.length < n){
      var brands = await this.brandRepository.find({
        where: {
          title: Like(`%${name}%`)
        },
        take: n,
      });

      for (var j of brands) {
        var cv = await this.productsRepository.findBy({ "brand_id": j.brand_id });
        bps = [...bps, ...cv];
      }
    }
    if(abp.length + bps.length < n){
      products = await this.productsRepository.find({
        where: {
          product_name: Like(`%${name}%`)
        },
        take: n,
      });
    }

    var req = this.removeDuplicates([abp, bps, products]);
    return req;
  }

  async findOneProduct(product_id: number): Promise<any> {
    console.log(product_id);
    var ab = await this.productsRepository.findOneBy({ "product_id": product_id });
    console.log(ab);
    return ab;

  }



  async findByBrandWithDetails(brand_id: number, n?: number, page?: number): Promise<Product[]> {
    var cd = await this.productsRepository
      .createQueryBuilder('product')
      .leftJoinAndSelect('product.brand', 'brand')
      .select(['product', 'brand.brand_id', 'brand.title', 'brand.slug', 'brand.url', 'brand.image', 'brand.parent', 'brand.level', 'brand.description', 'brand.status', 'brand.added_by', 'brand.tax_type', 'brand.tax_name', 'brand.tax_per', 'brand.tx_id', 'brand.hide'])
      .where('product.brand_id = :brand_id', { brand_id })
      .getMany();

    var gh = Pagination(cd, n, page); return gh;
  }

  async findByCategory(user_id: number, cat_id: number, n?: number, page?: number): Promise<any> {
    const limit = n;
    const skip = (page - 1) * limit;
    const [results, total] = await this.productsRepository.findAndCount({
      where: { "cat_id": cat_id },
      skip,
      take: limit,
    });

    var UpdatedProductList = [];
    for (var product of results) {
      var b1 = await this.FavouritesRepository.findOneBy({ "prod_id": product.product_id, "user_id": user_id });
      if (b1) {
        product.isFavourite = true;
      }
      var b2 = await this.cartRepository.findOneBy({ "user_id": user_id, "product_id": product.product_id });
      if (b2) {
        product.cartCount = b2.qty;

      }
      var b3 = await this.brandRepository.findOneBy({ "brand_id": product.brand_id });
      if (b3) {
        UpdatedProductList.push({ ...product, "BRAND": b3 })
      }
      else UpdatedProductList.push(product);
    }
    return UpdatedProductList;
  }

  async getFeaturedProducts(n?: number, page?: number): Promise<any> {
    const limit = n;
    const skip = (page - 1) * limit;
    const [results, total] = await this.productsRepository.findAndCount({
      where: { "featured": 1 },
      skip,
      take: limit,
    });

    return results;

  }

  createProduct(product: Product): Promise<InsertResult> {
    return this.productsRepository.insert(product);
  }

  async uploadProducts(file: Express.Multer.File): Promise<InsertResult> {
    var csvFile = readFileSync('./files/Products.csv');
    var products: Product[] = await parse(csvFile.toString(), {
      header: true,
      skipEmptyLines: true,
      transformHeader: (header) => header.toLowerCase().replace('#', '').trim(),
      complete: (results) => results.data
    }).data
    return this.productsRepository.insert(products);
  }

  async updateproduct(product_id: number, product: Product): Promise<UpdateResult> {
    var pr = await this.productsRepository.findOneBy({ product_id });
    if (pr) {
      return this.productsRepository.update(product_id, { ...pr, ...product });
    } else {
      return new Promise<UpdateResult>((resolve, reject) => {
        //  resolve(null)
      })
    }
  }

  async removeProduct(product_id: number): Promise<any> {
    return await this.productsRepository.delete(product_id);

  }

  /****************ProductVarient CRUD********************/
  async findProductVarientsByProductId(product_id: number, n?: number, page?: number): Promise<any> {
    var cd = await this.productvarientRepository.findBy({ product_id });
    var gh = Pagination(cd, n, page);
    return gh;
  }

  findProductVarientByVarientId(varient_id: number): Promise<ProductVarient> {
    return this.productvarientRepository.findOneBy({ varient_id });
  }

  async m3s(n?: number, page?: number): Promise<any> {
    const limit = n;
    const skip = (page - 1) * limit;
    const [results, total] = await this.productvarientRepository.findAndCount({
      skip,
      take: limit,
    });

    return results;
  }

  createProductVarient(productVarient: ProductVarient): Promise<InsertResult> {
    return this.productvarientRepository.insert(productVarient);
  }

  async uploadProductVarient(file: Express.Multer.File): Promise<InsertResult> {
    var csvFile = readFileSync('./files/ProductVarient.csv');
    var productVarient: ProductVarient[] = await parse(csvFile.toString(), {
      header: true,
      skipEmptyLines: true,
      transformHeader: (header) => header.toLowerCase().replace('#', '').trim(),
      complete: (results) => results.data
    }).data
    return this.productvarientRepository.insert(productVarient);
  }

  async updateProductVarient(varient_id: number, productVarient: ProductVarient): Promise<UpdateResult> {
    var ExistingVarient = await this.productvarientRepository.findOneBy({ varient_id })
    if (ExistingVarient) {
      return this.productvarientRepository.update(varient_id, { ...ExistingVarient, ...productVarient });
    } else {
      return new Promise<UpdateResult>((resolve, reject) => {
        resolve(null)
      })
    }
  }

  async removeProductVarient(varient_id: number): Promise<DeleteResult> {
    return await this.productvarientRepository.delete(varient_id);
  }



  /********************Stock Availability************ */
  // getStockAvailablity(): Promise<ProductVarient[]>{
  //   return this.productvarientRepository.find({ relations: {
  //     product: true,
  // } });
  // }

  async findAllpv(n?: number, page?: number): Promise<any> {
    var pv = await this.productvarientRepository.find();
    var pvv = [];
    for (var pv1 of pv) {
      var pr = await this.productsRepository.findOneBy({ product_id: pv1.product_id });
      pvv.push({ ...pv1, pr });

    }
    var cd = pvv;
    var gh = Pagination(cd, n, page);
    return gh;

  }

}