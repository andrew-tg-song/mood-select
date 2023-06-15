import { PromotionType } from '../../../../entity/src/promotion/promotion.entity';
import { fetchPromotionByTitle } from '../../apis/promotion';
import CardSlider from '../slider/CardSlider';
import { useQuery } from '@tanstack/react-query';

export default function MainSlider() {
  const { isLoading, error, data } = useQuery(
    ['mainBanners'],
    () => fetchPromotionByTitle(PromotionType.BANNER, 'mainBanners'),
    { staleTime: 1000 * 60 * 5 }
  );
  const items = data?.items;

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Something is wrong...😔</p>
      ) : (
        <CardSlider items={items} slidesToShow={1} slidesToScroll={1} />
      )}
    </div>
  );
}
