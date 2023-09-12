import { Controller, Get, Param, Post, Put, Delete, Body, Query } from '@nestjs/common';
import { RolesService } from './role.service';
import { Roles } from './entities/roles.entity';
import { DeleteResult, InsertResult, UpdateResult } from 'typeorm';
import { ApiBearerAuth, ApiHeader } from '@nestjs/swagger';

@ApiHeader({
  name: 'userId',
})
@Controller('role')
@ApiBearerAuth()
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  /****************Roles CRUD********************/
  @Get('all')
  getRoles( ): Promise<any> {
    return this.rolesService.findAllRoles();
  }

  
@Get('Search_Roles/:keyword')
async m7(@Param('keyword') name:string , @Query('items_per_page') n?: number,@Query('page_number') pgn?: number):Promise<any> {
return this.rolesService.m7s(name,n,pgn);
}




  @Get('user/:id')
  getRolesPerUser(@Param('id') user_id: number): Promise<any> {
    return this.rolesService.findRolesPerUser(user_id);
  }
  @Get(':id')
  getRole(@Param('id') roles_id: number): Promise<Roles> {
    return this.rolesService.findOneRoles(roles_id);
  }
  @Post()
  addRoles(@Body() roles: Roles): Promise<InsertResult> {
    return this.rolesService.createRoles(roles);
  }
  @Put(':id')
  updateroles(@Param('id') roles_id: number, @Body() roles:Roles): Promise<UpdateResult> {
    return this.rolesService.updateroles(roles_id, roles);
  }
  @Delete(':id')
  deleteRoles(@Param('id') roles_id: number): Promise<any> {
    return this.rolesService.removeRoles(roles_id);
  }
}
