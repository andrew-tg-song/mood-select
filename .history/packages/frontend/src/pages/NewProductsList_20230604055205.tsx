import { useQuery } from '@tanstack/react-query';
import { search } from '../ShoppingMallProducts';

export default function NewProductsList() {
  const name = 'NEW';

  const {
    isLoading,
    error,
    data: products,
  } = useQuery(['products', name], async () => search(name), { staleTime: 1000 * 60 * 5 });
  console.log(products);
  return <div></div>;
}
