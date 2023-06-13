// import { useNavigate } from 'react-router-dom';
import { search } from '../../ShoppingMallProducts';
import Button from '../Button';
import Product, { ProductType } from '../product/Product';
import Title from '../slider/Title';
import { useQuery } from '@tanstack/react-query';

export default function NewProducts() {
  const name = 'NEW';

  const {
    isLoading,
    error,
    data: products,
  } = useQuery(['products', name], async () => search(name), { staleTime: 1000 * 60 * 5 });
  console.log(products);

  // const navigate = useNavigate();

  return (
    <div className="mb-[140px]">
      {isLoading ? (
        'Loading...'
      ) : error ? (
        <p>Something is wrong...😔</p>
      ) : (
        <>
          <Title text1="새로운 제품." text2="더 다양한 제품으로 고객님의 취향의 저격!" />

          <div className="w-[100%] mt-[40px] flex justify-between flex-wrap">
            {products?.map((product: ProductType) => {
              return (
                <>
                  <Product key={product.id} product={product} onClick={() => void 0} />
                </>
              );
            })}
          </div>

          <Button onClick={() => {}} value="MORE VIEW" />
        </>
      )}
    </div>
  );
}
