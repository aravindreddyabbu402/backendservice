import { Entity, Column, PrimaryGeneratedColumn, OneToMany , OneToOne, ManyToOne,JoinColumn} from 'typeorm';

@Entity()
export class PromotionalProduct {
  @PrimaryGeneratedColumn() product_id: number;
  @Column() product_name?: string;
  @Column() cat_id?: number;
  @Column() cat_name?: string;
  @Column() brand_id?: number;
  @Column() product_image?: string;
  @Column({default: 'Regular'}) type?: string;
  @Column({ default: 0 }) hide?: number;
  @Column({default: 0}) added_by?: number;
  @Column({default: 1}) approved?: number;
  @Column() admin_share?: string;
  @Column() featured?: number;
  @Column() price?: string;
  @Column() weight?: string;
  @Column() discount?: string;
  @Column() isFavourite?: boolean;
  @Column() detail?: string;
  @Column() ratingValue?: string;
}


