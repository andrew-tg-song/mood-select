import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

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

  // to do: category(가장 낮은 레벨), color, option(level 1), tag, thumbnail mapping
}
