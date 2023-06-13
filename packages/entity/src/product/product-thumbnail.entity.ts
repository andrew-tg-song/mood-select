import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class ProductThumbnail {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({
    type: 'string',
    length: 1024,
  })
  url: string;

  @Column('number')
  order: number;

  @Column({
    type: 'string',
    nullable: true,
  })
  name?: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
