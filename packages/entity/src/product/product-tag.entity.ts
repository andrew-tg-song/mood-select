import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProductTag {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('string')
  name: string;
}
