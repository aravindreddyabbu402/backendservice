import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BrandService } from './brand.service';
import { BrandController } from './brand.controller';
import { Brand } from './entities/brand.entity';
import { BrandRepository } from './BrandRepository';

@Module({
  imports: [TypeOrmModule.forFeature([Brand])],
  exports: [TypeOrmModule],
  providers: [BrandService,BrandRepository],
  controllers: [BrandController],
})
export class BrandModule {}