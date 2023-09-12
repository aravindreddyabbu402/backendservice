import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Store {
  @PrimaryGeneratedColumn()
  id: number
  @Column() store_name?: string
  @Column() employee_name?: string
  @Column() phone_number?: number
  @Column({default: 'N/A'}) store_photo?: string
  @Column() city?: string
  @Column() city_id?: number
  @Column() admin_share?: number
  @Column() device_id?: string
  @Column() email?: string
  @Column() password?: string
  @Column() del_range?: number
  @Column() lat?: string
  @Column() lng?:string
  @Column() address?: string
  @Column({default: 1}) admin_approval?:number
  @Column({default: 1}) orders?: number
  @Column({default: 1}) store_status?: number
  @Column() store_opening_time?: string
  @Column() store_closing_time?: string
  @Column() time_interval?: number
  @Column() inactive_reason?: string
  @Column() id_type?: string
  @Column() id_number?: string
  @Column() id_photo?: string
  @Column() compensation?: number
  @Column() compensation_unit?: string
  @Column({default: "string"}) store_feedback?: string

}