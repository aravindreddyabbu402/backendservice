import { Test, TestingModule } from '@nestjs/testing';
import { HscreenController } from './hscreen.controller';

describe('HscreenController', () => {
  let controller: HscreenController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HscreenController],
    }).compile();

    controller = module.get<HscreenController>(HscreenController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
