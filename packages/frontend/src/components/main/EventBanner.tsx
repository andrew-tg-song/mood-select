import { search } from '../../apis/ShoppingMallProducts';
import { useQuery } from '@tanstack/react-query';

export default function EventBanner() {
  const name = 'EVENT';

  const {
    isLoading,
    error,
    data: products,
  } = useQuery(['products', name], async () => search(name), { staleTime: 1000 * 60 * 5 });
  console.log(products);

  return (
    <div className="w-[81.25rem] mb-[140px] mx-auto">
      {isLoading ? (
        'Loading...'
      ) : error ? (
        <p>Something is wrong...😔</p>
      ) : (
        <img className="w-[100%] object-cover" src={products.image} />
      )}
    </div>
  );
}
