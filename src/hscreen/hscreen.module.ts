import { Module } from '@nestjs/common';
import { HscreenController } from './hscreen.controller';
import { HscreenService } from './hscreen.service';
import { Hscreen } from './hscreen.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Hscreen ])],
  controllers: [HscreenController],
  providers: [HscreenService]
})
export class HscreenModule {}
