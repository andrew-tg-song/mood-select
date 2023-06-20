import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProductCategory {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('string')
  name: string;

  @Column('number')
  categoryLevel: 1 | 2;

  childrenCategories: ProductCategory[];

  @Column({
    type: 'number',
    nullable: true,
  })
  parentCategory?: ProductCategory;
}
