import { search } from '../../ShoppingMallProducts';
import CardSlider from '../slider/CardSlider';
import Title from '../slider/Title';
import { useQuery } from '@tanstack/react-query';

export default function BestProductRecommendation() {
  const name = 'BEST';

  return (
    <div className="w-[100%] bg-[#1d1d1d]">
      <div>
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Something is wrong...😔</p>
        ) : (
          <div className="w-[81.25rem] mx-auto py-[90px]">
            <Title text1="베스트 제품." text2="고객님의 마음을 두드릴 베스트 제품을 소개합니다." />

            <CardSlider items={products} slidesToShow={3} slidesToScroll={3} />
          </div>
        )}
      </div>
    </div>
  );
}
