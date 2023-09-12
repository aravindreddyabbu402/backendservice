import { Entity, Column, PrimaryGeneratedColumn,OneToMany, OneToOne,JoinColumn,ManyToOne } from 'typeorm';
import { Product } from 'src/products/entities/products.entity';

@Entity()
export class Cart {
  @PrimaryGeneratedColumn()
  cart_id: number
  @Column() product_id?: number
  @Column({default: 0}) varient_id?: number
  @Column() user_id?: number
  @Column() qty?: number
  @ManyToOne(() => Product)
  @JoinColumn({ name: 'product_id' })
  product?: Product;
}