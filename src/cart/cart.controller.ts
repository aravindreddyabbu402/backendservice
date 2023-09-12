import { Controller, Get, Param, Post, Put, Delete, Body, Headers, Query } from '@nestjs/common';
import { CartService } from './cart.service';
import { Cart } from './entities/cart.entity';
import { DeleteResult, InsertResult, UpdateResult } from 'typeorm';
import { ApiBearerAuth, ApiHeader } from '@nestjs/swagger';
import { CartDTO } from './CartDTO.dto';

@ApiHeader({
  name: 'userId',
})
@Controller('cart')
@ApiBearerAuth()
export class CartController {
  constructor(private readonly cartService: CartService) {}

  /****************Cart CRUD********************/
  @Get('ByUserId')
  getCart(@Headers("userId") userId: number): Promise<any> {
    return this.cartService.getCart(userId);
  }

  @Get("findcartAll")
  getCartup(): Promise<any> {
    return this.cartService.getCartup();
  }
  // @Get('Cart__Search/:keyword')
  // m1(@Param('keyword') name:string):Promise<any> {
  //   return this.cartService.CartSearch(name);
  // }

  @Get('findAllPc')
  getCartpc(@Headers("userId") user_id:number): Promise<any> {
    return this.cartService.findAllpcs(user_id);
  }

  @Get('ByCartId/:id')
  getCartItem(@Param('id') cart_id: number): Promise<Cart> {
    return this.cartService.findOneCartItem(cart_id);
  }
  @Post('getCartByProductIdAndUserId')
  getCartByPridUserId(@Body() cart: Cart): Promise<any> {
    return this.cartService.findOneCartItem2(cart);
  }
  @Post('insertIntoCart')
  addToCart(@Body() cart: Cart): Promise<InsertResult> {
    return this.cartService.createCartItem(cart);
  }
  @Put(':id')
  updateCart(@Param('id') cart_id: number, @Body() cart:Cart): Promise<UpdateResult> {
    return this.cartService.updateCartItem(cart_id, cart);
  }
  @Delete(':id')
  deleteCart(@Headers("userId") user_id:number, @Param('id') cart_id: number): Promise<any> {
    return this.cartService.removeFromCart(cart_id, user_id);
  }
  @Delete('delete_All_cart/:user_id')
  deleteAllCartByUserId(@Param('user_id') user_id: number): Promise<any> {
    return this.cartService.removeAllCartOfUser(user_id);
  }
}
