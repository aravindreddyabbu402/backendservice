import { Body, Controller, Post } from '@nestjs/common';
import { InsertResult } from 'typeorm';
import { AppService } from './app.service';
import { UsersService } from './user/user.service';

@Controller('')
export class AppController {
    getHello(): any {
      throw new Error('Method not implemented.');
    }
    constructor(private readonly appService: AppService,
        private readonly userService: UsersService

        ) {}

    // @Post('gUser/create')  
    // async createGoogleUser(@Body() token: String): Promise<InsertResult>{
    //     const user = await this.appService.verifyGToken(token)
    //     this.userService.createUser(user);
    // }
}
