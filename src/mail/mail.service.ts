import { MailerService } from "@nestjs-modules/mailer";
import { Injectable } from "@nestjs/common";

@Injectable()
export class MailService {
    constructor(private mailerService: MailerService) {}

    async sendMail(email: string, userName: string, templateName: string = 'email', emailSubject: string = '',orderID: string = '', time: string = new Date().toISOString()) {
        await this.mailerService.sendMail({
            to: email,
            subject: emailSubject,
            template: templateName, 
            context: {
                name: userName,
                orderID: orderID,
                time: time
            }
        }).then((result) => {
            console.log(result)
        }, (reason)=>{
            console.log("reason: "+reason)
        })
    }
}