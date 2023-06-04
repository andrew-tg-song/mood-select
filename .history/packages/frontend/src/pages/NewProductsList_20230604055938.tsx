import { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { search } from '../ShoppingMallProducts';
import { DarkModeContext } from '../context/DarkModeContext';

export default function NewProductsList() {
  const { darkMode } = useContext(DarkModeContext);

  const name = 'PRODUCTS';

  const {
    isLoading,
    error,
    data: products,
  } = useQuery(['products', name], async () => search(name), { staleTime: 1000 * 60 * 5 });
  console.log(products);
  return (
    <div className={`${darkMode === 'light' ? 'bg-white text-black' : 'bg-[#0f0f0f] text-white'} pb-[140px]`}></div>
  );
}
