import { Test, TestingModule } from '@nestjs/testing';
import { PhoneCommentsService } from './phone-comments.service';

describe('PhoneCommentsService', () => {
  let service: PhoneCommentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PhoneCommentsService],
    }).compile();

    service = module.get<PhoneCommentsService>(PhoneCommentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
