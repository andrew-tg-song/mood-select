import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class ProductOption {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('string')
  name: string;

  options: {
    name: string;
    imageUrl?: string;
    additionalPrice: number;
    childrenOptions: number[];
  }[];

  parent: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
