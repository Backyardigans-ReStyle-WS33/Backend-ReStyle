import { Test, TestingModule } from '@nestjs/testing';
import { RemodelerService } from './remodeler.service';

describe('RemodelerService', () => {
  let service: RemodelerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RemodelerService],
    }).compile();

    service = module.get<RemodelerService>(RemodelerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
