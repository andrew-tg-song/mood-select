import { useQuery } from '@tanstack/react-query';
import { search } from '../ShoppingMallProducts';

export default function List({ listName }) {
  const name = 'PRODUCTS';

  const {
    isLoading,
    error,
    data: products,
  } = useQuery(['products', name], async () => search(name), { staleTime: 1000 * 60 * 5 });
  console.log(products);

  return (
    <>
      {products?.map((product) => {
        if (product.typeA === listName) {
          return <Product product={product} />;
        }
      })}
    </>
  );
}
