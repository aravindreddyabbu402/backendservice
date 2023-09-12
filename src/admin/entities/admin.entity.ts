import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Admin{
    @PrimaryGeneratedColumn() id: number
    @Column() name?: string
    @Column() email?: string
    @Column() password?: string
    @Column() admin_image?: string
    @Column({default: "string"}) remember_token?: string
    @Column() role_id?: number
    @Column({default: ""}) role_name?: string
    @Column({default: 0}) user_id?: number
}