import { Column, Entity,  PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class City {
    @PrimaryGeneratedColumn() city_id:number;
    @Column() city_name?:string;
}

