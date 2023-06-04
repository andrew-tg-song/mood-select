import { search } from '../../ShoppingMallProducts';
import { useQuery } from '@tanstack/react-query';

export default function EventBanner2() {
  const name = 'EVENT2';

  const {
    isLoading,
    error,
    data: products,
  } = useQuery(['products', name], async () => search(name), { staleTime: 1000 * 60 * 5 });
  console.log(products);

  return (
    <div className="w-[100%] my-[140px]">
      <img className="w-[100%] object-cover" src={products.image} />
    </div>
  );
}
