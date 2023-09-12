import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Tax {
    
    @PrimaryGeneratedColumn() tx_id:number;
    @Column({default: "string"}) tax_name?:string;
    @Column({default: 0}) tax_type?:number;
    @Column({default: 0}) tax_per?:number;
    @Column({default: "string" }) description?:string;

}

