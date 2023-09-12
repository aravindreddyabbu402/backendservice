import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Categories {
  @PrimaryGeneratedColumn()
  cat_id: number
  @Column({ default: 'string' }) title?: string
  @Column({ default: 'string' }) slug?: string
  @Column({ default: 'string' }) url?: string
  @Column({ default: 'string' }) image?: string
  @Column({ default: 0 }) parent?: number
  @Column({ default: 1 }) level?: number
  @Column({ default: 'string' }) description?: string
  @Column({ default: 0 }) status?: number
  @Column({ default: 0 }) added_by?: number
  @Column({ default: 0 }) tax_type?: number
  @Column({ default: 'string' }) tax_name?: string
  @Column({ default: 0 }) tax_per?: number
  @Column({ default: 0 }) tx_id?: number
  @Column({ default: 0 }) hide?: number
}