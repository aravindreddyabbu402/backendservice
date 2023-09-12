import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SMSNotification } from 'src/sms/SMSNotification.service';
import { Users } from 'src/user/entities/user.entity';
import { UsersService } from 'src/user/user.service';
import { SMSNotificationController } from './SMSNotification.controller';
import { Twilio } from 'twilio';


@Module({
    imports: [TypeOrmModule.forFeature([Users])],
    exports: [TypeOrmModule],
  providers: [SMSNotification, UsersService],
  controllers: [SMSNotificationController],
})
export class SMSNotificationModule {}