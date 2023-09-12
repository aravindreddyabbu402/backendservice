import { Module } from '@nestjs/common';
import { TermsAndConditionsService } from './terms-and-conditions.service';
import { TermsAndConditionsController } from './terms-and-conditions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TermsAndConditions } from './TermsAndConditions.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TermsAndConditions])],
  providers: [TermsAndConditionsService],
  controllers: [TermsAndConditionsController]
})
export class TermsAndConditionsModule {}
