import { useQuery } from '@tanstack/react-query';
import { search } from '../../ShoppingMallProducts';
import { useParams } from 'react-router-dom';

export default function ProductNav() {
  const { listName } = useParams();
  console.log(listName);

  const name = 'NAV';

  const {
    isLoading,
    error,
    data: products,
  } = useQuery(['products', name], async () => search(name), { staleTime: 1000 * 60 * 5 });
  console.log(products);

  return (
    <div>
      <ul>
        {products?.map((product) => {
          if (product.type === listName) {
            return (
              <li>
                {product.kind.map((k) => {
                  return <p>{k}</p>;
                })}
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}
