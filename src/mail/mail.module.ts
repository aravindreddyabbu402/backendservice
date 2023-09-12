import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { MailController } from './mail.controller';
import { MailService } from './mail.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

@Module({
  imports: [TypeOrmModule,
    MailerModule.forRootAsync({
        useFactory: async () => ({
            transport: {
              host: 'smtp.gmail.com',//process.env.EMAIL_HOST,
              secure: false,
              auth: {
                user: 'netichaitu12345@gmail.com',//process.env.EMAIL_USER,
                pass: 'iqmxilyxrklnkzhf',//process.env.EMAIL_PASSWORD,
              },
            },
            defaults: {
              from: 'netichaitu12345@gmail.com'
            },
            template: {
              dir: join(__dirname, './templates'),
              adapter: new HandlebarsAdapter(),
              options: {
                strict: true
              }
            }
          }),
    }),
  ],
  exports: [TypeOrmModule],
  controllers: [MailController],
  providers: [MailService],
})
export class MailModule {}