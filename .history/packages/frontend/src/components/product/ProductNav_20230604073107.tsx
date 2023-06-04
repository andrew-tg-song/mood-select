import { useQuery } from '@tanstack/react-query';
import { search } from '../../ShoppingMallProducts';

export default function ProductNav() {
  const {
    isLoading,
    error,
    data: products,
  } = useQuery(['products', name], async () => search(name), { staleTime: 1000 * 60 * 5 });
  console.log(products);

  return (
    <div>
      <ul>
        <li>all</li>
        <li>long</li>
      </ul>
    </div>
  );
}
