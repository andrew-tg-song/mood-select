import React, { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';
import BestProductRecommendation from '../components/main/BestProductRecommendation';

export default function Main() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={`${darkMode === 'light' ? 'bg-white text-black' : 'bg-[#0f0f0f] text-white'} h-[5000px]`}>
      <BestProductRecommendation />
      <div className="w-[81.25rem] mx-auto py-[8.75rem]"></div>
    </div>
  );
}
