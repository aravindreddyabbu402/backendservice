import { ApiProperty } from '@nestjs/swagger';
import { ProductDto } from 'src/products/GetProductsDto.dto';

export class CartDTO {
  @ApiProperty()
  cart_id: number;

  @ApiProperty()
  product_id: number;

  // ... include other properties from the Cart entity
  @ApiProperty()
  varient_id: number;

  @ApiProperty()
  user_id: number;

  @ApiProperty()
  qty: number;

  @ApiProperty()
  product: ProductDto; // Assuming you have a ProductDTO defined for the Product entity
}

