import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Users } from './user.entity';

export class Authentication{
    message: string
    authenticated?: boolean
    retrievedUser?: Users
    token?: string
}