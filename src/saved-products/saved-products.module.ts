import { Module } from '@nestjs/common';
import { SavedProductsController } from './saved-products.controller';
import { SavedProductsService } from './saved-products.service';
import { SavedProducts } from './SavedProducts.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from 'src/products/entities/products.entity';
import { CartModule } from 'src/cart/cart.module';

@Module({
  imports: [TypeOrmModule.forFeature([Product, SavedProducts]),CartModule],
  exports: [TypeOrmModule],
  controllers: [SavedProductsController],
  providers: [SavedProductsService]
})
export class SavedProductsModule {}
