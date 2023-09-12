
import { IsString, IsNumber, IsOptional } from 'class-validator';
import { Entity } from 'typeorm';
@Entity()
export class SetTrending {

  @IsString()
  setTrendingProducts?: string;

}


