import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Address{
    @PrimaryGeneratedColumn() address_id: number
    @Column({default: ""}) addressNickName?: string
    @Column({default: ""}) address1?: string
    @Column({default: ""}) address2?: string
    @Column({default: ""}) type?: string
    @Column({default: 0}) user_id?: number
    @Column({default: ""}) receiver_name?: string
    @Column({default: ""}) receiver_phone?: string
    @Column({default: ""}) city?: string
    @Column({default: ""}) society?: string
    @Column({default: 0}) city_id?: number
    @Column({default: 0}) society_id?: number
    @Column({default: ""}) house_no?: string
    @Column({default: ""}) landmark?: string
    @Column({default: ""}) state?: string
    @Column({default: ""}) pincode?: string
    @Column({default: ""}) lat?: string
    @Column({default: ""}) lng?: string
    @Column({default: 0}) select_status?: number
    @Column({default: ""}) added_at?: string
    @Column({default: ""}) updated_at?: string
    @Column({default: false}) is_default?: boolean
    
}
