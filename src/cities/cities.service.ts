import { Body, Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';
import { Pagination, Search } from 'src/globalHelper';
import { City } from './city.entity';

@Injectable()
export class CitiesService {
    constructor(
        @InjectRepository(City)
        private CityRepository: Repository<City>,
    ){}
    /*********************************************************** */



    async getCities() :Promise<any> {
        return await this.CityRepository.find();
        
    }

    
    async getCityById(id:number):Promise<any> {
        return await this.CityRepository.findOneBy({"city_id":id});
    }
                
        async m2s(name:string,n?: number, page?: number):Promise<any> {
            var ab=await this.CityRepository.find();
            return Search(name,ab,n,page);
        }
      

    async addCity(@Body() city:City) :Promise<InsertResult> {
        return await this.CityRepository.insert(city);
    }

   

    async UpdateCity(id :number,city:City) : Promise<any> {
        var existingCity=await this.CityRepository.findOneBy({"city_id":id});
        if(existingCity) {
            return this.CityRepository.update(id,{...existingCity,...city});
        }
        else{
                  return new Promise<UpdateResult>((_resolve, reject) => {
                    //  resolve(null)
                  })
                }
        }

   

    async DeleteCity(id:number):Promise<any> {
         await this.CityRepository.delete(id);
         return await this.CityRepository.find();
    }




}
