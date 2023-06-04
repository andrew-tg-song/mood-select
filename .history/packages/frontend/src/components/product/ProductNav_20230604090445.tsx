import { useQuery } from '@tanstack/react-query';
import { search } from '../../ShoppingMallProducts';
import { useParams } from 'react-router-dom';

export default function ProductNav() {
  const params = useParams();
  console.log(params);

  const name = 'NAV';

  const {
    isLoading,
    error,
    data: products,
  } = useQuery(['products', name], async () => search(name), { staleTime: 1000 * 60 * 5 });
  console.log(products);

  return (
    <div>
      <ul></ul>
    </div>
  );
}
