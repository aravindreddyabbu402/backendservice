import { Module } from '@nestjs/common';
import { CancelReasonService } from './cancel-reason.service';
import { CancelReasonController } from './cancel-reason.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { cancelReason } from './cancelReason.entity';

@Module({
  imports: [TypeOrmModule.forFeature([cancelReason])],
  providers: [CancelReasonService],
  controllers: [CancelReasonController]
})
export class CancelReasonModule {}


