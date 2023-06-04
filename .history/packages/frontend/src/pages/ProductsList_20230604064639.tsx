import { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { DarkModeContext } from '../context/DarkModeContext';
import { useParams } from 'react-router-dom';
import { search } from '../ShoppingMallProducts';
import Product from '../components/product/Product';

export default function ProductsList() {
  const { darkMode } = useContext(DarkModeContext);

  const { listName } = useParams();
  console.log(listName);

  const name = 'PRODUCTS';

  const {
    isLoading,
    error,
    data: products,
  } = useQuery(['products', name], async () => search(name), { staleTime: 1000 * 60 * 5 });
  console.log(products);

  return (
    <div className={`${darkMode === 'light' ? 'bg-white text-black' : 'bg-[#0f0f0f] text-white'} pb-[140px]`}>
      <div className="w-[81.25rem] py-[140px] mx-auto">
        <h1>{listName}</h1>
        {products?.map((product) => {
          return <Product product={product} />;
        })}
      </div>
    </div>
  );
}
