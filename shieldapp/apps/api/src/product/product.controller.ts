import { Body, Controller, Logger, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductType } from './product.type';
import { Observable } from 'rxjs';
import { ProductEntity } from './product.model';

@Controller('product')
export class ProductController {

	constructor(private productService: ProductService) {}

	@Post()
	create(@Body() product: ProductType): Promise<ProductType> {
		return this.productService.createProduct(product)
	}
}
