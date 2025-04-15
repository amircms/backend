import { Test, TestingModule } from '@nestjs/testing';
import { NestedMenuItemsController } from '../nested-menu-items.controller';
import { NestedMenuItemsService } from '../nested-menu-items.service';

describe('NestedMenuItemsController', () => {
  let controller: NestedMenuItemsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NestedMenuItemsController],
      providers: [NestedMenuItemsService],
    }).compile();

    controller = module.get<NestedMenuItemsController>(
      NestedMenuItemsController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
