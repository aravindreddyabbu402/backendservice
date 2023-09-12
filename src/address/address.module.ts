import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressService } from './address.service';
import { AddressController } from './address.controller';
import { Address } from './entities/address.entity';
import { Users } from 'src/user/entities/user.entity';
import { UsersService } from 'src/user/user.service';
import { SMSNotification } from 'src/sms/SMSNotification.service';


@Module({
  imports: [TypeOrmModule.forFeature([Address,Users,SMSNotification])],
  exports: [TypeOrmModule],
  providers: [AddressService,UsersService,SMSNotification],
  controllers: [AddressController],
})
export class AddressModule {}