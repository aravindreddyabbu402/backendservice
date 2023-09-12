import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Roles{
    @PrimaryGeneratedColumn() role_id: number
    @Column({default: 'string'}) role_name?: string
    @Column() dashboard?: number
    @Column() tax?: number
    @Column({default: 0}) user_id?: number
    @Column() membership?: number
    @Column() reports?: number
    @Column() notification?: number
    @Column() users?: number
    @Column() category?: number
    @Column() product?: number
    @Column() area?: number
    @Column() store?: number
    @Column() orders?: number
    @Column() payout?: number
    @Column() rewards?: number
    @Column() delivery_boy?: number
    @Column() pages?: number
    @Column() feedback?: number
    @Column() callback?: number
    @Column() settings?: number
    @Column() reason?: number
}