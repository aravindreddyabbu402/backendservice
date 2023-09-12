import { Test, TestingModule } from '@nestjs/testing';
import { SavedProductsService } from './saved-products.service';

describe('SavedProductsService', () => {
  let service: SavedProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SavedProductsService],
    }).compile();

    service = module.get<SavedProductsService>(SavedProductsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
