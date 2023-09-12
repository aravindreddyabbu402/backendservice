import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Hscreen {
    @PrimaryColumn() product_id:number;
    @Column() category_Id?:number;
    @Column() category_name?:string;
    @Column() product_name?:string;
    @Column() description?:string;
    @Column() image?:string;
    @Column() image2?:string;
}

