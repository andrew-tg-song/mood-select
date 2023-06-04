import { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';

export default function ProductsList() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={`${darkMode === 'light' ? 'bg-white text-black' : 'bg-[#0f0f0f] text-white'} pb-[140px]`}>
      <h1>Product List!</h1>
    </div>
  );
}
