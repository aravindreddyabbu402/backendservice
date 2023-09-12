import { Exception } from "handlebars";
import { UsersService } from "src/user/user.service";

export class SMSNotification{

  private twilioClient: any;

  constructor(private usersService: UsersService){
    const accountSid = process.env.twilioAccountSID;
    const authToken = process.env.twilioAuthToken;
    this.twilioClient = require('twilio')(accountSid, authToken);
  }

    send(phone: string, text: string){
      this.twilioClient.messages
      // .create({body: 'Hi there', from: '+16089676147', to: '+918655025343'})
      .create({body: text, from: process.env.twilioFromPhone, to: phone})
      .then(message => console.log(message.sid), 
            error => console.log(error));
    }

    initiatePhoneNumberVerification(phoneNumber: string) {
      const serviceSid = process.env.twilioAccountSID;
      console.log("hello me")
     
      return this.twilioClient.verify.v2.services(serviceSid)
        .verifications
        .create({ to: phoneNumber, channel: 'sms', locale: 'en' }).then((response) => {
          console.log("success: "+response)
        }, (error) => {
          console.log("error: "+error)
        })
    }

    async confirmPhoneNumber(userId: number, phoneNumber: string, verificationCode: string) {
      const serviceSid = process.env.twilioAccountSID;

      const result = await this.twilioClient.verify.services(serviceSid)
        .verificationChecks
        .create({to: phoneNumber, code: verificationCode})
   
      if (!result.valid || result.status !== 'approved') {
        throw new Exception('Wrong code provided');
      }
   
      await this.usersService.markPhoneNumberAsConfirmed(userId)
    }

}