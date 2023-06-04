import { useQuery } from '@tanstack/react-query';
import { search } from '../../ShoppingMallProducts';
import axios from 'axios';

export default function ProductNav() {
  const {
    isLoading,
    error,
    data: products,
  } = useQuery(['products', name], async () => {return axios('../public/data/product.json').then((res) => {
res.data[0].main_slider}, { staleTime: 1000 * 60 * 5 });
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
