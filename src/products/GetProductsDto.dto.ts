import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsOptional } from 'class-validator';

export class ProductDto {
  @ApiProperty()
  @IsNumber()
  readonly product_id: number;

  @ApiProperty()
  @IsNumber()
  readonly cat_id: number;

  @ApiProperty()
  @IsNumber()
  readonly brand_id: number;

  @ApiProperty()
  @IsString()
  readonly product_name: string;

  @ApiProperty()
  @IsString()
  readonly product_image: string;

  @ApiProperty()
  @IsString()
  readonly type: string;

  @ApiProperty()
  @IsNumber()
  readonly hide: number;

  @ApiProperty()
  @IsNumber()
  readonly added_by: number;

  @ApiProperty()
  @IsNumber()
  readonly approved: number;

  @ApiProperty()
  @IsString()
  readonly admin_share: string;

  @ApiProperty()
  @IsNumber()
  readonly featured: number;

  @ApiProperty({ required: false })
  @IsOptional()
  readonly brand?: any;

  
  
  @ApiProperty()
  @IsString()
  readonly price: string;

  
  @ApiProperty()
  @IsString()
  readonly weight: string;

  
  @ApiProperty()
  @IsString()
  readonly discount: string;

  
  @ApiProperty()
  @IsNumber()
  readonly cartCount:number;

  @ApiProperty()
  @IsNumber()
  readonly isFavourite:boolean;

  @ApiProperty()
  @IsString()
  readonly detail: string;

  @ApiProperty()
  @IsString()
  readonly ratingValue: string;









}
