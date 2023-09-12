import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class DeliveryBoy{
    @PrimaryGeneratedColumn() dboy_id: number
    @Column() boy_name?: string
    @Column() boy_phone?: string
    @Column() boy_city?: string
    @Column() password?: string
    @Column() device_id?: string
    @Column() boy_loc?: string
    @Column() lat?: string
    @Column() lng?: string
    @Column() status?: number
    @Column() store_id?: number
    @Column() store_dboy_id?: number
    @Column() added_by?: string
    @Column() id_no?: string
    @Column() id_photo?: string
    @Column() image?: string
    @Column() id_name?: string
    @Column() current_lat?: string
    @Column() current_lng?: string
    @Column() delivery_boy_feedback?: string
}