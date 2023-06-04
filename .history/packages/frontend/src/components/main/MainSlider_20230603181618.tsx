import { search } from '../../ShoppingMallProducts';
import CardSlider from '../slider/CardSlider';
import { useQuery } from '@tanstack/react-query';

export default function MainSlider() {
  const name = 'MAINSLIDER';

  const {
    isLoading,
    error,
    data: products,
  } = useQuery(['products', name], async () => search(name), { staleTime: 1000 * 60 * 5 });
  console.log(products);

  return (
    <div>{isLoading ? <p>Loading...</p> : <CardSlider items={products} slidesToShow={1} slidesToScroll={1} />}</div>
  );
}
