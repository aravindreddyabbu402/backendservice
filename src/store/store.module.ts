import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StoresService } from './store.service';
import { StoreController } from './store.controller';
import { Store } from './entities/store.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Store])],
  exports: [TypeOrmModule],
  providers: [StoresService],
  controllers: [StoreController],
})
export class StoreModule {}