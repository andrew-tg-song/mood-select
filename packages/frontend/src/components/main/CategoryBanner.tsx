import { PromotionType } from 'entity';
import { fetchPromotionByTitle } from '../../apis/promotion';
import CardSlider from '../slider/CardSlider';
import { useQuery } from '@tanstack/react-query';

const CategoryBanner = (): JSX.Element => {
  const { isLoading, error, data } = useQuery(
    ['categoryBanners'],
    () => fetchPromotionByTitle(PromotionType.BANNER, 'categoryBanners'),
    { staleTime: 1000 * 60 * 5 }
  );
  const items = data?.items;

  return (
    <div className="w-[81.25rem] mx-auto pt-[8.75rem] mb-[140px]">
      {isLoading ? (
        'Loading...'
      ) : error ? (
        '<p>Something is wrong...😔</p>'
      ) : (
        <CardSlider items={items} slidesToShow={2} slidesToScroll={2} />
      )}
    </div>
  );
};

export default CategoryBanner;
