import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Favourites {
  @PrimaryGeneratedColumn() fav_id?: number; 
  @Column({default: 0}) user_id?:number;
  @Column({default: 0}) prod_id?:number;
}