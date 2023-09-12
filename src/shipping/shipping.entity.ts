import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class Shipping {
  @PrimaryColumn() sh_id: number
  @Column() shipping_method?: string
  @Column() shipping_charge?: string
  @Column() hide?:boolean
  @Column({type: 'text'}) description?: string
}