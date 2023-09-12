import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class DealProduct {
  @PrimaryGeneratedColumn()
  deal_id: number
  @Column() varient_id?: number
  @Column() deal_price?: number
  @Column() valid_from?: string
  @Column() valid_to?: string
  @Column() status?: number
  @Column() store_id?: number
}