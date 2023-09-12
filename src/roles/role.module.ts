import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolesService } from './role.service';
import { RolesController } from './role.controller';
import { Roles } from './entities/roles.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Roles])],
  exports: [TypeOrmModule],
  providers: [RolesService],
  controllers: [RolesController],
})
export class RolesModule {}