import { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';
import { useParams } from 'react-router-dom';

export default function ProductsList() {
  const { darkMode } = useContext(DarkModeContext);

  const params = useParams();

  return (
    <div className={`${darkMode === 'light' ? 'bg-white text-black' : 'bg-[#0f0f0f] text-white'} pb-[140px]`}>
      <div className="w-[81.25rem] py-[140px] mx-auto">
        <h1>Product List!</h1>
      </div>
    </div>
  );
}
