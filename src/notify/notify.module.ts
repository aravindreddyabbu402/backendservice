import { Module } from '@nestjs/common';
import { NotifyController } from './notify.controller';
import { NotifyService } from './notify.service';
import { Transaction } from 'src/transaction/Transaction.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Notify } from './notify.entity';
import { UserModule } from 'src/user/user.module';
import { StoreModule } from 'src/store/store.module';

@Module({
  imports: [TypeOrmModule.forFeature([Notify ]),UserModule,StoreModule],
  controllers: [NotifyController],
  providers: [NotifyService]
})
export class NotifyModule {}
