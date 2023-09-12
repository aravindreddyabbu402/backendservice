import { Test, TestingModule } from '@nestjs/testing';
import { HscreenService } from './hscreen.service';

describe('HscreenService', () => {
  let service: HscreenService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HscreenService],
    }).compile();

    service = module.get<HscreenService>(HscreenService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
