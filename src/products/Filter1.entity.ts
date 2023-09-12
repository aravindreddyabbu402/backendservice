

import { IsString, IsNumber, IsOptional } from 'class-validator';
import { Entity } from 'typeorm';
@Entity()
export class Filter1 {

  @IsString()
  keyword?: string;
 
  @IsNumber()
   rating?: number;

  
  @IsString()
   categories?: string;

 
  @IsString()
   brands?: string;

  
  @IsNumber()
   minPrice?: number;

 
  @IsNumber()
   maxPrice?: number;


}


