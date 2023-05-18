import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ProductEntity } from './product.model';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductType } from './product.type';

@Injectable()
export class ProductService {
  constructor(@InjectRepository(ProductEntity) private readonly productRepository: Repository<ProductEntity>) {}

  createProduct(product: ProductType): Promise<ProductType> {
	return this.productRepository.save(product);
  }
}
