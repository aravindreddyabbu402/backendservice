// GenOtpDto.ts
import { IsNotEmpty, IsNumber } from 'class-validator';

export class GenOtpDto {
  @IsNotEmpty()
  @IsNumber()
  user_phone: string;
}
