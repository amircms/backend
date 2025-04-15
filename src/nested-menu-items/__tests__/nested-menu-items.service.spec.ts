import { Test, TestingModule } from '@nestjs/testing';
import { NestedMenuItemsService } from '../nested-menu-items.service';

describe('NestedMenuItemsService', () => {
  let service: NestedMenuItemsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NestedMenuItemsService],
    }).compile();

    service = module.get<NestedMenuItemsService>(NestedMenuItemsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
