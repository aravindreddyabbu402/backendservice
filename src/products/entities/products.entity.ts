import { Entity, Column, PrimaryGeneratedColumn, OneToMany , OneToOne, ManyToOne,JoinColumn} from 'typeorm';
import { ProductVarient } from './productvarient.entity';
import { Brand } from 'src/brand/entities/brand.entity';
import { Cart } from 'src/cart/entities/cart.entity';


@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  product_id: number;
  @ManyToOne(() => Brand)
  brand?: Brand;
  @Column({ default: 0 }) ordered_times_count?: number;
  @Column({ default: 99999 }) seller_rank?: number;
  @Column({ default: 0 }) gift_times_count:number;
  @Column({ default: 99999 }) gift_ranking:number;
  @Column({ default: 0 }) cat_id?: number;
  @Column({ default: 0 }) brand_id?: number;
  @Column() product_name?: string;
  @Column() product_image?: string;
  @Column({ default: 'string' }) Image_Thumb_Nail?: string;
  @Column({default: 'Regular'}) type?: string;
  @Column({ default: 0 }) hide?: number;
  @Column({default: 0}) added_by?: number;
  @Column({default: 1}) approved?: number;
  @Column({ default: 'string' }) admin_share?: string;
  @Column({ default: 0 }) featured?: number;
  @OneToMany(() => ProductVarient, (productVarient) => productVarient.product)
  product_varients?: ProductVarient[]
//   @OneToMany(() => DealProduct, (dp) => dp.prs)
// dps?: DealProduct[];


  // @OneToOne(() => Cart)
  //   @JoinColumn()
  //   Cart:Cart

  @OneToOne(() => Cart, (cart) => cart.product)
  cart?: Cart;
  @Column({ default: "string" }) price?: string;
  @Column({ default: 'string' }) weight?: string;
  @Column({ default: 'string' }) discount?: string;
  @Column({ default: 0 }) cartCount?: number;
  @Column({ default: false }) isFavourite?: boolean;
  @Column({default: 'string' }) product_highlights?: string;
  @Column({ default: 0 }) review_count?:number
  @Column({ default: 'string' }) ratingValue?: string;
  @Column({ default: 99999 }) trending_rank?:number;
  @Column({ type: 'varchar', length: 3000, default: 'string' }) detail?: string;
  @Column({ type: 'varchar', length: 1000, default: 'string' }) country_state?: string;
  @Column({ type: 'varchar', length: 1000, default: 'string' }) ABV?: string;
  @Column({ type: 'varchar', length: 1000, default: 'string' }) region?: string;
  @Column({ type: 'varchar', length: 1000, default: 'string' }) style?: string;
  @Column({ type: 'varchar', length: 1000, default: 'string' }) taste?: string;
  @Column({ type: 'varchar', length: 1000, default: 'string' }) type_Brand?: string;
  @Column ({ type: 'varchar', length: 1000, default: 'string' }) brand2?: string;

}


