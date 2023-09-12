import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { AUTHORIZATION_ERROR, LOGIN_TOKEN, LOGOUT_ERROR } from 'src/constants/constants';
import { Users } from 'src/user/entities/user.entity';
import { UsersService } from 'src/user/user.service';
const jwt = require('jsonwebtoken');

@Injectable()
export class TokenAuthenticationMiddleware implements NestMiddleware {
  constructor(private readonly userService: UsersService){}
  async use(req: Request, res: Response, next: NextFunction) {
    const tokenHeaderKey = process.env.tokenHeaderKey
    const userIdHeaderKey = process.env.userIdHeaderKey
    const jwtSecretKey = process.env.jwtSecretKey
    try {
        const token = req.header(tokenHeaderKey) ? req.header(tokenHeaderKey).split(" ")[1] : "";
        const userId = req.header(userIdHeaderKey);
        const user: Users = await this.userService.findOneUser(Number.parseInt(userId));
        if(user.remember_token === token){
          const verified = jwt.verify(token, jwtSecretKey+":"+userId);
          if(verified) {
              next();
          } else {
              return res.status(401).send(AUTHORIZATION_ERROR);
          }
        } else {
          return res.status(401).send(LOGOUT_ERROR);
        }
        
    } catch (error) {
        return res.status(500).send(error);
    }
    
  }
}
