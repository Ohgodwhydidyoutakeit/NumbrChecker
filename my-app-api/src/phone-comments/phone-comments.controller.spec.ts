import { Test, TestingModule } from '@nestjs/testing';
import { PhoneCommentsController } from './phone-comments.controller';

describe('PhoneCommentsController', () => {
  let controller: PhoneCommentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PhoneCommentsController],
    }).compile();

    controller = module.get<PhoneCommentsController>(PhoneCommentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
