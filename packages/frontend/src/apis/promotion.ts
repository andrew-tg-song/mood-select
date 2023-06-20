import { PromotionType } from 'entity';
import { bannersDataset } from './promotion-dataset';

export const fetchPromotionByTitle = async (type: PromotionType, title: string) => {
  if (type === PromotionType.BANNER) {
    return bannersDataset.find((banner) => banner.title === title);
  }
};
