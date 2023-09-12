import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TermsAndConditions {
    @PrimaryGeneratedColumn() id:number;
    @Column() description?:string;
    @Column() TimeStamp?:Date;
}

