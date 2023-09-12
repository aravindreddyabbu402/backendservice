import { Test, TestingModule } from '@nestjs/testing';
import { PromotionalProductsController } from './promotional-products.controller';

describe('PromotionalProductsController', () => {
  let controller: PromotionalProductsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PromotionalProductsController],
    }).compile();

    controller = module.get<PromotionalProductsController>(PromotionalProductsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
