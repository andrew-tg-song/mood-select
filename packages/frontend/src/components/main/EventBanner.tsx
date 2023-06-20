import { useQuery } from '@tanstack/react-query';
import { fetchPromotionByTitle } from '../../apis/promotion';
import { PromotionType } from 'entity';

export default function EventBanner() {
  const { isLoading, error, data } = useQuery(
    ['eventBanners1'],
    () => fetchPromotionByTitle(PromotionType.BANNER, 'eventBanners1'),
    { staleTime: 1000 * 60 * 5 }
  );
  const items = data?.items;

  return (
    <div className="w-[81.25rem] mb-[140px] mx-auto">
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
