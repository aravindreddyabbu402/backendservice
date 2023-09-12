import { Module } from '@nestjs/common';
import { TransactionController } from './Transaction.controller';
import { TransactionService } from './Transaction.service';
import { Transaction } from './Transaction.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Transaction ])],
  controllers: [TransactionController],
  providers: [TransactionService]
})
export class TransactionModule {}
