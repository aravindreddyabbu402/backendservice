import { Module } from '@nestjs/common';
import { PromotionalProductsController } from './promotional-products.controller';
import { PromotionalProductsService } from './promotional-products.service';
import { PromotionalProduct } from 'src/promotional-products/promotional-products.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BrandRepository } from 'src/brand/BrandRepository';
import { BrandModule } from 'src/brand/brand.module';
import { Brand } from 'src/brand/entities/brand.entity';
import { Product } from 'src/products/entities/products.entity';
import { ProductVarient } from 'src/products/entities/productvarient.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Product,PromotionalProduct, ProductVarient, Brand, BrandRepository ]), BrandModule],
  controllers: [PromotionalProductsController],
  providers: [PromotionalProductsService]
})
export class PromotionalProductsModule {

}

