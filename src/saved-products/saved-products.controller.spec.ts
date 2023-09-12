import { Test, TestingModule } from '@nestjs/testing';
import { SavedProductsController } from './saved-products.controller';

describe('SavedProductsController', () => {
  let controller: SavedProductsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SavedProductsController],
    }).compile();

    controller = module.get<SavedProductsController>(SavedProductsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
