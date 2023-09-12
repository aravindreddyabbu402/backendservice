import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Store_orders {
  @PrimaryGeneratedColumn()
  store_order_id: number
  @Column() product_name?: string
  @Column() varient_image?: string
  @Column() quantity?: number
  @Column() unit?: string
  @Column() varient_id?: number
  @Column() qty?: number
  @Column() price?: number
  @Column() total_mrp?: number
  @Column() order_cart_id?: string
  @Column() order_date?: string
  @Column() store_approval?: number
  @Column() store_id?: number
  @Column() description?: string
  @Column() tx_per?: number
  @Column() price_without_tax?: number
  @Column() tx_price?: number
  @Column() tx_name?: string
  @Column() type?: string
  @Column() store_order_status?: string
  @Column() store_confirmed_at?: string

}