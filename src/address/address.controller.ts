import { Controller, Get, Param, Post, Put, Delete, Body, Headers, Query } from '@nestjs/common';
import { AddressService } from './address.service';
import { Address } from './entities/address.entity';
import { DeleteResult, InsertResult, UpdateResult } from 'typeorm';
import { ApiBearerAuth, ApiHeader } from '@nestjs/swagger';

@ApiHeader({
  name: 'userId',
})
@Controller('address')
@ApiBearerAuth()
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  /****************Addresss CRUD********************/
  @Get('all')
  getAddressByUser(@Headers('userId') user_id: number): Promise<Address[]> {
    return this.addressService.findAddressByUser(user_id);
  }

 

 
  @Get('AllUsersAddressList')
  getAddressAll(): Promise<any> {
    return this.addressService.qw12();
  }

  @Get('Address_Search/:address')
  m1(@Param('address') name:string , @Query('items_per_page') n?: number,@Query('page_number') pgn?: number):Promise<any> {
    return this.addressService.getAddressBySearch(name,n,pgn);
  }



  @Get(':id')
  getAddress(@Param('id') address_id: number): Promise<Address> {
    return this.addressService.findOneAddress(address_id);
  }
  
  @Post('')
  addAddress(@Body() address: Address): Promise<InsertResult> {
    return this.addressService.createAddress(address);
  }

  @Put(':id')
  updateaddress(@Param('id') address_id: number, @Body() address:Address): Promise<UpdateResult> {
    return this.addressService.updateAddress(address_id, address);
  }
  
  @Put('UpdateDefaultAddress/:address_id')
  updateDefaultAddress(@Param('address_id') address_id: number, @Headers('userId') user_id: number): Promise<any> {
    return this.addressService.setDefaultAddress(address_id,user_id);
  }
 
  @Delete(':id')
  deleteAddress(@Param('id') address_id: number,@Headers('userId') user_id: number): Promise<Address[]> {
    return this.addressService.removeAddress(address_id, user_id);
  }
}
