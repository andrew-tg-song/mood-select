import { useQuery } from '@tanstack/react-query';
import { fetchPromotionByTitle } from '../../apis/promotion';
import { PromotionType } from '../../../../entity/src/promotion/promotion.entity';

export default function EventBanner2() {
  const { isLoading, error, data } = useQuery(
    ['eventBanners2'],
    () => fetchPromotionByTitle(PromotionType.BANNER, 'eventBanners2'),
    { staleTime: 1000 * 60 * 5 }
  );
  const items = data?.items;

  return (
    <div className="w-[100%] my-[140px]">
      {isLoading ? (
        'Loading...'
      ) : error ? (
        <p>Something is wrong...😔</p>
      ) : (
        <img className="w-[100%] object-cover" src={items?.[0].imageUrl} />
      )}
    </div>
  );
}
