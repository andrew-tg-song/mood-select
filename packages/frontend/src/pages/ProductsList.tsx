import { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { DarkModeContext } from '../context/DarkModeContext';
import { useNavigate, useParams } from 'react-router-dom';
import { search } from '../ShoppingMallProducts';
import Product, { ProductType } from '../components/product/Product';
import ProductNav from '../components/product/ProductNav';

export default function ProductsList() {
  const { darkMode } = useContext(DarkModeContext);

  const { listName, kind } = useParams();
  console.log(listName, kind);

  const navigate = useNavigate();

  const name = 'PRODUCTS';

  const { data: products } = useQuery(['products', name], async () => search(name), { staleTime: 1000 * 60 * 5 });
  console.log(products);

  return (
    <div className={`${darkMode === 'light' ? 'bg-white text-black' : 'bg-[#0f0f0f] text-white'} pb-[140px]`}>
      <div className="w-[81.25rem] py-[140px] mx-auto">
        <ProductNav />

        {kind === undefined || kind === 'ALL' ? (
          <>
            {products?.map((product: ProductType) => {
              if (product.typeA === listName) {
                return (
                  <Product
                    key={product.id}
                    product={product}
                    onClick={() => {
                      navigate(`/detail/${product.id}`);
                    }}
                  />
                );
              }
            })}
          </>
        ) : (
          <>
            {products?.map((product: ProductType) => {
              if (product.typeB?.includes(kind)) {
                return (
                  <Product
                    key={product.id}
                    product={product}
                    onClick={() => {
                      navigate(`/detail/${product.id}`);
                    }}
                  />
                );
              }
            })}
          </>
        )}
      </div>
    </div>
  );
}
