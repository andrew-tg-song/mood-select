import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { DarkModeContext } from '../context/DarkModeContext';
import { useQuery } from '@tanstack/react-query';
import { search } from '../ShoppingMallProducts';

export default function Detail() {
  const { darkMode } = useContext(DarkModeContext);

  const { detailId } = useParams();

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
        {products?.map((product) => {
          if (product.id === detailId) {
            return (
              <>
                <h1>{product.title}</h1>
              </>
            );
          }
        })}
      </div>
    </div>
  );
}
