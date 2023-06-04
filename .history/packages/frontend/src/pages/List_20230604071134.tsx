import { useQuery } from '@tanstack/react-query';
import { search } from '../ShoppingMallProducts';
import Product from '../components/product/Product';
import { useParams } from 'react-router-dom';

export default function List() {
  const { listName, detailType } = useParams();
  console.log(listName, detailType);

  const name = 'PRODUCTS';

  const {
    isLoading,
    error,
    data: products,
  } = useQuery(['products', name], async () => search(name), { staleTime: 1000 * 60 * 5 });
  console.log(products);

  return (
    <>
      <h1>sdsfsf</h1>
      {products?.map((product) => {
        if (product.typeA === listName) {
          return <Product product={product} />;
        }
      })}
    </>
  );
}
