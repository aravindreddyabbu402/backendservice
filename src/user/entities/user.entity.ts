import { Address } from 'src/address/entities/address.entity';
import { Product } from 'src/products/entities/products.entity';
import { Entity, Column, PrimaryGeneratedColumn,OneToMany, Index } from 'typeorm';

@Entity()
export class Users{
    @PrimaryGeneratedColumn() id: number
    @Column({default: ""}) name?: string
    @Column({default: null}) 
    @Index({ unique: true, where: "email IS NOT NULL" })
    email?: string
    @Column({default: ""}) email_verified_at?: string
    @Column({default: ""}) password?: string
    @Column({default: ""}) remember_token?: string
    @Column({default: null}) 
    @Index({ unique: true, where: "user_phone IS NOT NULL" })
    user_phone?: string
    @Column({default: ""}) device_id?: string
    @Column({default: ""}) user_image?: string
    @Column({default: 0}) user_city?: number
    @Column({default: 0}) user_area?: number
    @Column({default: ""}) otp_value?: string
    @Column({default: 0}) status?: number
    @Column({default: 0}) wallet?: number
    @Column({default: 0}) rewards?: number
    @Column({default: 0}) is_verified?: number
    @Column({default: 0}) block?: number
    @Column({default: '1900-01-01' }) reg_date?: Date
    @Column({default: 0}) app_update?: number
    @Column({default: null})  
    @Index({ unique: true, where: "facebook_id IS NOT NULL" })
    facebook_id?: string
    @Column({default: ""}) referral_code?: string
    @Column({default: 0}) membership?: number
    @Column({default: ""}) mem_plan_start?: string
    @Column({default: ""}) mem_plan_expiry?: string
    @Column({default: ""}) created_at?: string
    @Column({default: ""}) updated_at?: string
    @Column({default: ""}) secret?: string;
    @Column({default: "string"}) user_feedback?: string;
    @Column({default: false}) is_admin?: boolean

    @OneToMany(() => Address, (adr) => adr.user_id)
    Addresses?: Address[]
    
}