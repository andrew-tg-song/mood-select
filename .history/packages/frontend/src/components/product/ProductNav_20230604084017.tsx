import { useQuery } from '@tanstack/react-query';

import axios from 'axios';

export default function ProductNav() {
  const {
    isLoading,
    error,
    data: categories,
  } = useQuery(
    ['category'],
    async () => {
      return axios('../public/data/product.json').then((res) => {
        res.data[0].category;
      });
    },
    { staleTime: 1000 * 60 * 5 }
  );
  console.log(categories);

  return (
    <div>
      <ul>
        <li>all</li>
        <li>long</li>
      </ul>
    </div>
  );
}
