import { Controller, Post, Query } from "@nestjs/common";
import { ApiBearerAuth, ApiHeader } from "@nestjs/swagger";
import { MailService } from "./mail.service";

@ApiHeader({
    name: 'userId',
})
@Controller('mail')
@ApiBearerAuth()
export class MailController {
    constructor(private readonly mailService: MailService) {}

    @Post('send')
    async sendEmail(@Query('email') email: string, @Query('name') name: string) {
        return await this.mailService.sendMail(email, name, 'email', 'Hello World!!!');
    }
}