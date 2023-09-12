import { Test, TestingModule } from '@nestjs/testing';
import { PromotionalProductsService } from './promotional-products.service';

describe('PromotionalProductsService', () => {
  let service: PromotionalProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PromotionalProductsService],
    }).compile();

    service = module.get<PromotionalProductsService>(PromotionalProductsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
