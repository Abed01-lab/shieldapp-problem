import { Test, TestingModule } from '@nestjs/testing';
import { ProductService } from './product.service';
import { ProductType } from './product.type';
import { InjectRepository, TypeOrmModule, getEntityManagerToken } from '@nestjs/typeorm';
import { ProductEntity } from './product.model';
import { DataSource, EntityManager, Repository } from 'typeorm';

describe('ProductService', () => {
  let service: ProductService;
  let ProductDatasource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "root",
    database: "shieldtest",
    entities: [ProductEntity],
    synchronize: true
  })


  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forFeature([ProductEntity]),
        TypeOrmModule.forRoot({
          type: "postgres",
          host: "localhost",
          port: 5432,
          username: "postgres",
          password: "root",
          database: "shieldtest",
          autoLoadEntities: true,
          synchronize: true
        }),
      ],
      providers: [ProductService],
    }).compile();

    service = module.get<ProductService>(ProductService);
  });

  afterEach(async () => {

    await ProductDatasource.driver.connect()
    await ProductDatasource.query("TRUNCATE TABLE products RESTART IDENTITY")
    await ProductDatasource.driver.disconnect()
  })

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a product', async () => {
    const product: ProductType = {
      name: "best chair",
      description: "the best chair in the world",
      price: 200
    }

    const savedProduct = await service.createProduct(product);
    expect(savedProduct.id).toBe(1);
  })
});
