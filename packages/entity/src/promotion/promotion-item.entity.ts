import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PromotionItem {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('number')
  order: number;

  @Column('string')
  imageUrl: string;

  @Column({
    type: 'string',
    nullable: true,
  })
  title?: string;

  @Column({
    type: 'string',
    nullable: true,
  })
  description?: string;

  @Column({
    type: 'string',
    nullable: true,
  })
  linkUrl?: string;
}
