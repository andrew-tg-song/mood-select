import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { ProductOptionItem } from './product-option-item.entity';

@Entity()
export class ProductOption {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('string')
  name: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  items: ProductOptionItem[];

  parent?: ProductOptionItem;
}
