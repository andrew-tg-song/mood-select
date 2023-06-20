import { useQuery } from '@tanstack/react-query';
import { search } from '../apis/ShoppingMallProducts';
import { useParams } from 'react-router-dom';

export default function List() {
  const { listName, detailType } = useParams();
  console.log(listName, detailType);

  const name = 'PRODUCTS';

  const { data: products } = useQuery(['products', name], async () => search(name), { staleTime: 1000 * 60 * 5 });
  console.log(products);

  return <></>;
}
