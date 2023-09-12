import { Module } from '@nestjs/common';
import { FavouritesController } from './favourites.controller';
import { FavouritesService } from './favourites.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from 'src/products/entities/products.entity';
import { Favourites } from './entities/Favourites.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product, Favourites]),],
  exports: [TypeOrmModule],
  controllers: [FavouritesController],
  providers: [FavouritesService]
})
export class FavouritesModule {}
