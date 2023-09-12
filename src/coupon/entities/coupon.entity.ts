import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Coupon {
  @PrimaryGeneratedColumn() coupon_id: number
  @Column() coupon_name?: string
  @Column() coupon_image?: string
  @Column() coupon_code?: string
  @Column() coupon_description?: string
  @Column() start_date?: string
  @Column() end_date?: string
  @Column() cart_value?: number
  @Column() amount?: number
  @Column() type?: string
  @Column() uses_restriction?: number
  @Column() store_id?: number
}