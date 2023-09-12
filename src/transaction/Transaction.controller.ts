import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { TransactionService } from './Transaction.service';
import { Transaction } from './Transaction.entity';
import { InsertResult, UpdateDateColumn } from 'typeorm';

@Controller('Transaction')
export class TransactionController {
    constructor(private readonly TransactionService: TransactionService ) {}

    @Get("Transactions/:user_id") 
    async readTns(@Param('user_id') user_id:number,@Query('items_per_page') n?: number,@Query('page_number') pgn?: number ): Promise<any> {
        return this.TransactionService.getTns(user_id,n,pgn);
    }

    @Get("TransactionsByUser_Sarch/:user_id") 
    async TnsSearch(@Param('user_id') user_id:number,@Query('Keyword') kw?: string,@Query('items_per_page') n?: number,@Query('page_number') pgn?: number ): Promise<any> {
        return this.TransactionService.getTnsUserSearch(user_id,kw,n,pgn);
    }



    @Post("Transaction")
    async insertTns(@Body() tns:Transaction): Promise<InsertResult> {
        return this.TransactionService.insertNewTns(tns);
    }
    @Put("update_transaction")
    async updateTns(@Param('py_id') py_id:number,@Body() tns:Transaction): Promise<InsertResult> {
        return this.TransactionService.updateTns(py_id,tns);
    }
}
