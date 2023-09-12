import { Body, Controller, Post, Query, Headers } from '@nestjs/common';
import { ApiBearerAuth, ApiHeader } from '@nestjs/swagger';
import { Users } from 'src/user/entities/user.entity';
import { Exception } from 'handlebars';
import { SMSNotification } from './SMSNotification.service';
import { UsersService } from 'src/user/user.service';
import { Twilio } from 'twilio';



@ApiHeader({
    name: 'userId',
  })
@Controller('role')
@ApiBearerAuth()
export class SMSNotificationController {
    constructor(private readonly smsService: SMSNotification,
        private userService: UsersService) {}

    @Post('initiate-verification')
    async initiatePhoneNumberVerification(@Body() user: Users) {
        if (user.is_verified) {
            console.log("hello")
            throw new Exception('Phone number already confirmed');
        }
        await this.smsService.initiatePhoneNumberVerification(user.user_phone);
    }

    @Post('check-verification-code')
  async checkVerificationCode(@Headers() userId: number, @Query() verificationCode: string) {
    const user: Users = await this.userService.findOneUser(userId);
    if (user.is_verified) {
      throw new Exception('Phone number already confirmed');
    }
    await this.smsService.confirmPhoneNumber(userId, user.user_phone, verificationCode);
  }
}