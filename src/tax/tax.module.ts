import { Module } from '@nestjs/common';
import { TaxController } from './tax.controller';
import { TaxService } from './tax.service';
import { Tax } from './tax.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Tax ])],
  controllers: [TaxController],
  providers: [TaxService]
})
export class TaxModule {}
