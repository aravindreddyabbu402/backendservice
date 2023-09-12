import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Product } from 'src/products/entities/products.entity';


@Entity()
export class Brand {
  @PrimaryGeneratedColumn()
  brand_id: number
  @Column() title?: string
  @Column() slug?: string
  @Column() url?: string
  @Column() image?: string
  @Column() parent?: number
  @Column() level?: number
  @Column() description?: string
  @Column() status?: number
  @Column() added_by?: number
  @Column() tax_type?: number
  @Column() tax_name?: string
  @Column() tax_per?: number
  @Column() tx_id?: number
  @Column() hide?: number
  @OneToMany(() => Product, product => product.brand)
  products?: Product[];
}