import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { Categories } from './entities/category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Categories])],
  exports: [TypeOrmModule],
  providers: [CategoryService],
  controllers: [CategoryController],
})
export class CategoryModule {}