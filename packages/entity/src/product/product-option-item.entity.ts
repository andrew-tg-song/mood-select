import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { ProductOption } from './product-option.entity';

@Entity()
export class ProductOptionItem {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('string')
  name: string;

  @Column({
    type: 'string',
    nullable: true,
  })
  imageUrl?: string;

  @Column('number')
  additionalPrice: number;

  childrenOptions: ProductOption[];
}
