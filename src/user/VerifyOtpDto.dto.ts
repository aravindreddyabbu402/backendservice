// VerifyOtpDto.ts
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class VerifyOtpDto {
  @IsNotEmpty()
  @IsNumber()
  user_phone: string;

  @IsNotEmpty()
  @IsString()
  otp: string;
}
