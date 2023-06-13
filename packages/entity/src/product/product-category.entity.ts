import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProductCategory {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('string')
  name: string;

  @Column('number')
  categoryLevel: 1 | 2 | 3;

  @Column({
    type: 'number',
    nullable: true,
  })
  parentCategory: number;
}
