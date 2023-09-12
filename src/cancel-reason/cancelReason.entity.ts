import { Column, Entity,  PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class cancelReason {
    @PrimaryGeneratedColumn() res_id:number;
    @Column({default: "string"}) reason?:string;
    @Column({default: "string"}) description?:string;
    @Column({default: 0}) hide?:number;
}

