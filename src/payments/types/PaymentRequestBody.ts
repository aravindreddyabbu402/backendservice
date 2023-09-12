import { Product } from '../../products/entities/products.entity';

export interface PaymentRequestBody {
  products: Product[];
  currency: string;
}