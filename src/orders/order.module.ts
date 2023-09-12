import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersService } from './order.service';
import { OrdersController } from './order.controller';
import { Orders } from './entities/orders.entity';
import { ProductsService } from 'src/products/products.service';
import { ProductVarient } from 'src/products/entities/productvarient.entity';
import { Product } from 'src/products/entities/products.entity';
import { Cart } from 'src/cart/entities/cart.entity';
import { CartService } from 'src/cart/cart.service';
import { UsersService } from 'src/user/user.service';
import { Users } from 'src/user/entities/user.entity';
import { SMSNotification } from 'src/sms/SMSNotification.service';
import { MailService } from 'src/mail/mail.service';
import { Brand } from 'src/brand/entities/brand.entity';
import { ProductsModule } from 'src/products/products.module';
import { BrandModule } from 'src/brand/brand.module';
import { BrandService } from 'src/brand/brand.service';
import { FavouritesModule } from 'src/favourites/favourites.module';
import { Favourites } from 'src/favourites/entities/Favourites.entity';
import { CategoryModule } from 'src/category/category.module';
import { CategoryService } from 'src/category/category.service';


@Module({
  imports: [TypeOrmModule.forFeature([Orders,FavouritesModule,Favourites, ProductVarient, Product, Brand, Cart, Users]), 
   ProductsModule,CategoryModule,
  BrandModule, ],
  exports: [TypeOrmModule],
  providers: [OrdersService, ProductsService, BrandService , CartService, UsersService,CategoryService, SMSNotification, MailService],
  controllers: [OrdersController],
})
export class OrderModule {}