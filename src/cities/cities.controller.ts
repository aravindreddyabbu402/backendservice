import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { DeleteResult, InsertResult } from 'typeorm';
import { CitiesService } from './cities.service';
import { City } from './city.entity';
@Controller('cities')
export class CitiesController {
    constructor( private readonly CitiesService:CitiesService) {}
    /******************************************************* */
    @Get('AllCities')
    async getAllCitys():Promise<any> {
        return this.CitiesService.getCities();
    }
    

    @Get('/:id')
    async getCityById(@Param('id') id:number):Promise<any> {
        return this.CitiesService.getCityById(id);
    }

  
    
    @Get('City__Search/:keyword')
    m2(@Param('keyword') name:string , @Query('items_per_page') n?: number,@Query('page_number') pgn?: number):Promise<any> {
      return this.CitiesService.m2s(name,n,pgn);
    }

    @Post('AddCity')
    async insertCity(@Body() city:City) :Promise<InsertResult> {
        return this.CitiesService.addCity(city);
    }

    @Put('/:id')
    async updateCity(@Param('id') id:number,@Body() city:City) :Promise<any> {
        return this.CitiesService.UpdateCity(id,city);
    }
    @Delete('/:id')
    async deleteCity(@Param('id') id:number ) :Promise<any> {
        return await this.CitiesService.DeleteCity(id);
    }
    
}
