import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProductRating {
  @PrimaryGeneratedColumn()
  rate_id: number
  @Column({ default: 0 }) product_id?:number
  @Column({ default: "string" }) product_image?:string
  @Column({ default: 0 }) store_id?: number
  
  @Column({ default: 0 }) varient_id?: number
  @Column({ default: "string" }) rating?: string
  @Column({ type: 'varchar', length: 3000, default: 'string' }) description?: string
  @Column({ default: 0 }) user_id?: number
  @Column({ default: "string" }) created_at?: string
  @Column({ default: "string" }) updated_at?: string
  @Column({ default: "string" }) hide?: string
  
}