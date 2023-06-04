import { search } from '../../ShoppingMallProducts';
import CardSlider from '../slider/CardSlider';
import { useQuery } from '@tanstack/react-query';

const CategoryBanner = (): JSX.Element => {
  const name = 'CATEGORY';

  const {
    isLoading,
    error,
    data: products,
  } = useQuery(['products', name], async () => search(name), { staleTime: 1000 * 60 * 5 });
  console.log(products);

  return (
    <div className="w-[81.25rem] mx-auto pt-[8.75rem] mb-[140px]">
      <CardSlider items={products} slidesToShow={2} slidesToScroll={2} />
    </div>
  );
};

export default CategoryBanner;
