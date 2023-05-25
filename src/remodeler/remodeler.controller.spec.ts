import { Test, TestingModule } from '@nestjs/testing';
import { RemodelerController } from './remodeler.controller';
import { RemodelerService } from './remodeler.service';

describe('RemodelerController', () => {
  let controller: RemodelerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RemodelerController],
      providers: [RemodelerService],
    }).compile();

    controller = module.get<RemodelerController>(RemodelerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
