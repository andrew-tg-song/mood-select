import { PromotionType } from '../../../entity/src/promotion/promotion.entity';
import { bannersDataset } from './promotion-dataset';

export const fetchPromotionByTitle = async (type: PromotionType, title: string) => {
  if (type === PromotionType.BANNER) {
    return bannersDataset[title];
  }
};
