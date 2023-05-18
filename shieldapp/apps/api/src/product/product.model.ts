import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity("products")
export class ProductEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

	@Column()
	description: string

	@Column()
	price: number
}
