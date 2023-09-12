import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class SavedProducts {
  @PrimaryGeneratedColumn() saved_id?: number; 
  @Column({default: 0}) user_id?:number;
  @Column({default: 0}) prod_id?:number;
}