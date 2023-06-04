import { search } from '../../ShoppingMallProducts';
import CardSlider from '../slider/CardSlider';
import { useQuery } from '@tanstack/react-query';

export default function MainSlider() {
  const name = 'MAINSLIDER';

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Something is wrong...😔</p>
      ) : (
        <CardSlider items={products} slidesToShow={1} slidesToScroll={1} />
      )}
    </div>
  );
}
