import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { PromotionItem } from './promotion-item.entity';

export const PromotionType = {
  BANNER: 1,
  EVENT: 2,
} as const;
export type PromotionType = typeof PromotionType[keyof typeof PromotionType];

@Entity()
export class Promotion {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('number')
  type: PromotionType;

  @Column('string')
  title: string;

  @Column({
    type: 'string',
    nullable: true,
  })
  thumbnailImageUrl?: string;

  @Column({
    type: 'string',
    nullable: true,
  })
  description?: string;
  
  items: PromotionItem[];
}
