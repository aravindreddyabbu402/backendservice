import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';
import { Users } from './entities/user.entity';
import { LoginDetail } from './entities/loginDetail.entity';
import { Authentication } from './entities/authentcation.entity';
import { LOGIN_TOKEN } from 'src/constants/constants';
import * as speakeasy from "speakeasy";
import { SMSNotification } from 'src/sms/SMSNotification.service';
// const bcrypt = require('bcrypt');
import * as bcrypt from 'bcrypt'; 
import {  MoreThan } from 'typeorm';
import { Pagination, Search } from 'src/globalHelper';
const jwt = require('jsonwebtoken');

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private userRepository: Repository<Users>,
    private readonly twilioNotification: SMSNotification,
  ) {}

  /****************Users CRUD********************/



  async pr(): Promise<number> {
    const oneWeekAgo = new Date(new Date().getTime() - 7* 24 * 60 * 60 * 1000);
    const total = await this.userRepository.count({
      where: { reg_date: MoreThan(oneWeekAgo) },
    });
  
    const [rows, tn] = await this.userRepository.findAndCount({
  
      });
    return (total/((tn-total)>0?(tn-total):1))*100;
    
  }
  

  

  



async generateOTP(mb: string): Promise<any> {
  const otpLength = 6;
  const digits = '0123456789';
  let otp = '';

  for (let i = 0; i < otpLength; i++) {
    otp += digits[Math.floor(Math.random() * 10)];
  }

  let user = await this.userRepository
    .createQueryBuilder('user')
    .where('user.user_phone = :phone', { phone: mb })
    .getOne();

  const hashedOTP = await bcrypt.hash(otp, 10); // Hash the OTP value

  if (user) {
    user.otp_value = hashedOTP;
    await this.userRepository.save(user);
  } else {
    const createdUserResult = await this.createUser({
      id: 0,
      user_phone: mb,
      otp_value: hashedOTP
    })
    // user = await this.findOneUser(createdUserResult.generatedMaps[0].id)
  }

  let otp_msg = `your otp is ${otp}`;
  this.twilioNotification.send(mb, otp_msg);

  setTimeout(async () => {
    const az = await this.userRepository.find();
    for (const aq of az) {
      if (aq.user_phone === JSON.stringify(mb)) {
        aq.otp_value = '';
        this.userRepository.save(aq);
      }
    }
  }, 5 * 60 * 1000);

  return "otp sent"+otp;
}

async verifyOTP(user_phone: string, otp: string): Promise<any> {
  const user = await this.userRepository
    .createQueryBuilder('user')
    .where('user.user_phone = :phone', { phone: user_phone })
    .getOne();

  if (user) {
    const otpMatches = await bcrypt.compare(otp, user.otp_value); // Compare the OTP value with the hashed OTP

    if (otpMatches) {
      // OTP is valid
      user.otp_value = ''; // Clear OTP value
      user.remember_token = this.generateJWT(user.id);
      await this.userRepository.save(user);
      //this.twilioNotification.send(user.user_phone, "OTP verification successful");
      return {
        message:"OTP verification successful",
        token: user.remember_token,
        userId: user.id,
        status: 200
      };
    }
  }

  //this.twilioNotification.send(user.user_phone, "OTP verification failed");
  return {
    message:"OTP verification failed",
    status: 500
  };
}


async m7s(searchText:string):Promise<Users[]> {
  return await this.userRepository.find({
    where : [
      {name: searchText},
      {email: searchText},
      {user_phone: searchText}
    ]
  });
}


  async findAllUsers(): Promise<any> {
    return await  this.userRepository.find();
    
  }

  findOneUser(id: number): Promise<Users> {
    return this.userRepository.findOneBy({ id });
  }

  async authenticateUser(user:LoginDetail):Promise<Authentication>{
    let retrievedUser: Users = null;
    if(user.id){
      retrievedUser = (await this.userRepository.findOneBy({"id": user.id}))
    }
    else if(user.email){
      retrievedUser = (await this.userRepository.findOneBy({"email": user.email}))
    }
    else if(user.name){
      retrievedUser = (await this.userRepository.findOneBy({"name": user.name}))
    }
    else if(user.user_phone){
      retrievedUser = (await this.userRepository.findOneBy({"user_phone": user.user_phone}))
    }
    console.log("user",retrievedUser)
    let authResponse: Authentication = null;
    const result = await bcrypt.compare(user.password, retrievedUser.password)
      if(result){
        const generatedJWT = this.generateJWT(retrievedUser.id)
        await this.updateuser(retrievedUser.id, {...retrievedUser, ...{"device_id":user.device_id, "remember_token": generatedJWT}}, false)
        authResponse ={
          "authenticated" : true,
          "message" : 'User successfully authenticated',
          "retrievedUser" : retrievedUser,
          "token": generatedJWT
        }
      } else{
        authResponse ={
          "authenticated" : false,
          "message" : 'Credentials invalid'
      }
    }
      return authResponse;
  }

  async logoutUser(userID:number):Promise<Authentication>{
    let retrievedUser: Users = await this.userRepository.findOneBy({"id": userID})

    await this.updateuser(retrievedUser.id, {...retrievedUser, ...{"device_id": "", "remember_token": ""}}, false)
    let authResponse ={
      "authenticated" : false,
      "message" : 'User successfully loggedOut'
    }
    return authResponse;
  }

  createUser(user: Users): Promise<InsertResult> {
    let result:Promise<InsertResult> = null;
    user.reg_date=new Date();
    bcrypt.hash(user.password, 10/* salt rounds*/, (err,hash) => {
      result = this.userRepository.insert({...user, ...{"password":hash}});
    });
    return result;
    
  }

  // registerUser(): Promise<InsertResult>{
  //   var secret = speakeasy.generateSecret();
  //   // return await this.userRepository.
  //   // return "asdf";
  //   // this.userRepository.insert({...user, ...{"password":hash}});


  // }


  // async registerUser(username: string): Promise<Users> {
  //   const secret = speakeasy.generateSecret();

  //   const qw = new Users();
  //   qw.name = username;
  //   qw.secret = secret.base32;

  //   return this.userRepository.save(qw);
  // }
  

  async updateuser(id: number, user: Users, encryptPassword: Boolean = false): Promise<UpdateResult> {
    if(encryptPassword){
      const userList: Users[] = await this.userRepository.findBy({ id })
      if(userList && userList.length){
        let result:Promise<UpdateResult> = null;
        bcrypt.hash(user.password, 10/* salt rounds*/, (err,hash) => {
          result = this.userRepository.update(id, {...user, ...{"password":hash}});
        });
        return result;
        
      }else{
        return new Promise<UpdateResult>((resolve, reject) => {
          //  resolve(null)
        })
      }
    } else {
      var existingUser=await this.userRepository.findOneBy({"id":id});
      return this.userRepository.update(id, {...existingUser,...user});
    }
  }

  async removeUser(id: number): Promise<DeleteResult> {
    return await this.userRepository.delete(id);
  }

  async markPhoneNumberAsConfirmed(userId: number): Promise<UpdateResult>{
    return this.userRepository.update(userId, {"is_verified": 1})
  }

  generateJWT(id:number){
    const jwtSecretKey = process.env.jwtSecretKey
    const expiresIn = process.env.expiresIn
    const data = {
        time: Date(),
        userId:id,
    }
    const token = jwt.sign(data, jwtSecretKey+":"+id,);// { expiresIn: expiresIn });
    return token
  }

  async verifyJWT(user_id:number, token:string): Promise<any>{
    const jwtSecretKey = process.env.jwtSecretKey
    try {
        
        const user: Users = await this.findOneUser(user_id);
        if(user.remember_token === token){
          const verified = jwt.verify(token, jwtSecretKey+":"+user_id);
          if(verified) {
              return {
                status: 200,
                message: "Token verification successful"
              }
          } else {
              return {
                status: 500,
                message: "Token verification failed"
              }
          }
        } else {
          return {
            status: 500,
            message: "Token verification failed"
          }
        }
        
    } catch (error) {
      return {
        status: 500,
        message: "Token verification failed"
      }
    }
  }
}