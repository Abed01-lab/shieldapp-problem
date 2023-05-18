import { Test, TestingModule } from '@nestjs/testing';
import { ProductController } from './product.controller';

describe('ProductController', () => {
  let productController: ProductController;


  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [ProductController],
    }).compile()

    productController = moduleRef.get<ProductController>(ProductController)
  });

  it('should be defined', () => {
    expect(productController).toBeDefined();
  });
});
