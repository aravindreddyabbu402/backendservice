import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class RecentSearch {
  @PrimaryGeneratedColumn()
  id: number
  @Column() keyword?: string
  @Column() user_id?: number
}