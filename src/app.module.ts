import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { OrderModule } from './orders/order.module';
import { CartModule } from './cart/cart.module';
import { StoreModule } from './store/store.module';
import { StoreOrdersModule } from './store_orders/store_orders.module';
import { CategoryModule } from './category/category.module';
import { BrandModule } from './brand/brand.module';
import { UserModule } from './user/user.module';
import { DeliveryBoyModule } from './deliveryBoy/dBoy.module';
import { AdminModule } from './admin/admin.module';
import { RolesModule } from './roles/role.module';
import { AddressModule } from './address/address.module';
import { TokenAuthenticationMiddleware } from './middleware/tokenAuthentication';
import * as dotenv from 'dotenv';
import { CouponModule } from './coupon/coupon.module';
import { DealModule } from './deal/deal.module';
import { ProductRatingModule } from './productRating/productrRating.module';
import { RecentSearchModule } from './recentSearch/recentSearch.module';
import { MailModule } from './mail/mail.module';
import { SMSNotificationModule } from './sms/SMSNotification.module';
import { Users } from './user/entities/user.entity';
import { UsersService } from './user/user.service';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { Brand } from './brand/entities/brand.entity';
import { Product } from './products/entities/products.entity';
import { SMSNotification } from './sms/SMSNotification.service';
import { FavouritesModule } from './favourites/favourites.module';
import { PaymentsModule } from './payments/payments.module';
import { TransactionModule } from './transaction/Transaction.module';
import { NotifyModule } from './notify/notify.module';
import { CreditCardModule } from './credit-card/credit-card.module';
import { HscreenModule } from './hscreen/hscreen.module';
import { PromotionalProductsModule } from './promotional-products/promotional-products.module';
import { ShippingModule } from './shipping/shipping.module';
import { Hscreen } from './hscreen/hscreen.entity';
import { Address } from './address/entities/address.entity';
import { GenOtpDto } from './user/GenOtpDto.dto';
import { VerifyOtpDto } from './user/VerifyOtpDto.dto';
import { LoginDetail } from './user/entities/loginDetail.entity';
import { Authentication } from './user/entities/authentcation.entity';
import { PasswordEntity } from './user/entities/passwordEntity.entity';
import { ProductVarient } from './products/entities/productvarient.entity';
import { Cart } from './cart/entities/cart.entity';
import { Orders } from './orders/entities/orders.entity';
import { Store } from './store/entities/store.entity';
import { Store_orders } from './store_orders/entities/store_orders.entity';
import { Categories } from './category/entities/category.entity';
import { DeliveryBoy } from './deliveryBoy/entities/dBoy.entity';
import { Admin } from './admin/entities/admin.entity';
import { Roles } from './roles/entities/roles.entity';
import { Coupon } from './coupon/entities/coupon.entity';
import { DealProduct } from './deal/entities/deal.entity';
import { ProductRating } from './productRating/entities/productRating.entity';
import { RecentSearch } from './recentSearch/entities/recentSearch.entity';
import { Favourites } from './favourites/entities/Favourites.entity';
import { DelFav } from './favourites/DelFav.dto';
import { Transaction } from './transaction/Transaction.entity';
import { Notify } from './notify/notify.entity';
import { CreditCard } from './credit-card/entities/CreditCard.entity';
import { PromotionalProduct } from './promotional-products/promotional-products.entity';
import { Shipping } from './shipping/shipping.entity';
import { TaxModule } from './tax/tax.module';
import { Tax } from './tax/tax.entity';
import { CitiesModule } from './cities/cities.module';
import { CancelReasonModule } from './cancel-reason/cancel-reason.module';
import { TermsAndConditionsModule } from './terms-and-conditions/terms-and-conditions.module';
import { City } from './cities/city.entity';
import { TermsAndConditions } from './terms-and-conditions/TermsAndConditions.entity';
import { cancelReason } from './cancel-reason/cancelReason.entity';
import { SavedProducts } from './saved-products/SavedProducts.entity';
import { SavedProductsModule } from './saved-products/saved-products.module';




@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
          return ({
          type: 'mariadb', // Replace with your database type
          host: configService.get<string>('PROD_DB_HOST'),
          port: configService.get<number>('PROD_DB_PORT'),
          username: configService.get<string>('PROD_DB_UNAME'),
          password: configService.get<string>('PROD_DB_PASS'),
          database: configService.get<string>('PROD_DB_NAME'),
          entities: [Address,Users,Tax,TermsAndConditions,cancelReason,City, GenOtpDto,VerifyOtpDto,LoginDetail,Authentication,PasswordEntity,ProductVarient,
            Cart,Product,Brand,Orders,Store,Store_orders,Categories,DeliveryBoy,Admin,Roles,Coupon,DealProduct,ProductRating,
            RecentSearch,Favourites,DelFav,Transaction,Notify,CreditCard,Hscreen,PromotionalProduct,Shipping,SavedProducts], // Add your entities here
          synchronize: true, // Set to false in production
        })
      },
      inject: [ConfigService],
    }),
    TypeOrmModule.forFeature([Users]),
    UserModule,
    ProductsModule,
    OrderModule,
    CartModule,
    StoreModule,
    StoreOrdersModule,
    CategoryModule,
    BrandModule,
    DeliveryBoyModule,
    AdminModule,
    RolesModule,
    AddressModule,
    CouponModule,
    DealModule,
    ProductRatingModule,
    RecentSearchModule,
    MailModule,
    SMSNotificationModule,
    FavouritesModule,
    PaymentsModule,
    TransactionModule,
    NotifyModule,
    CreditCardModule,
     HscreenModule,
     PromotionalProductsModule,
     ShippingModule,
      TaxModule,
    CitiesModule,
     CancelReasonModule,
     TermsAndConditionsModule,
     SavedProductsModule,
     

    
  ],
  controllers: [AppController],
  providers: [AppService, UsersService,SMSNotification ],
})

export class AppModule {
  constructor() {
    dotenv.config()
  }

  configure(consumer: MiddlewareConsumer) {
    // consumer
    //   .apply(TokenAuthenticationMiddleware)
    //   .exclude({ path: 'user/authenticate', method: RequestMethod.POST })
    //   .forRoutes('/');

    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}