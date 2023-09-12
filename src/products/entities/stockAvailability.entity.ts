// import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from 'typeorm';
// import { Brand } from 'src/brand/entities/brand.entity';
// import { Categories } from 'src/category/entities/category.entity';
// import { Product } from './products.entity';

// @Entity("product_varient")
// export class StockAvailability {
    
//   @PrimaryGeneratedColumn() varient_id: number;
  
//   @ManyToOne(type => Product, product => product.product_varient, { eager: true })
//   @JoinColumn()
//   product: Product;
// }