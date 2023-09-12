import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from 'typeorm';
import { Product } from './products.entity';

@Entity()
export class ProductVarient {
  @PrimaryGeneratedColumn() varient_id: number;

  @Column() product_id?: number
  @Column() quantity?: number
  @Column() unit?: string
  @Column() base_mrp?: number
  @Column() base_price?: number
  @Column() cost_price?: number
  @Column() admin_share?: number
  @Column() description?: string
  @Column() varient_image?: string
  @Column() ean?: string
  @Column({default: 1}) approved?: number
  @Column({default: 0}) added_by?: number
  @Column() total_count?: number

  @ManyToOne(() => Product, product => product.product_varients)
  product?: Product;
  // @ManyToOne(() => Product, product => product.variants)
  // product: Product;

}