import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { ProductTag } from './product-tag.entity';
import { ProductCategory } from './product-category.entity';
import { ProductOption } from './product-option.entity';
import { ProductThumbnail } from './product-thumbnail.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('string')
  title: string;

  @Column('longtext')
  description: string;

  @Column('number')
  price: number;
  
  @Column('number')
  salePrice: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  thumbnails: ProductThumbnail[];

  categories: ProductCategory[];

  tags: ProductTag[];

  options: ProductOption[];

  similarProducts: Product[];
}
