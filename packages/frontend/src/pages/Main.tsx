import { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';
import CategoryBanner from '../components/main/CategoryBanner';
import MainSlider from '../components/main/MainSlider';
import EventBanner from '../components/main/EventBanner';

import eventBannerImg from '../assets/review_event_banner.png';
import BestProductRecommendation from '../components/main/BestProductRecommendation';
import NewProducts from '../components/main/NewProducts';

export default function Main() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={`${darkMode === 'light' ? 'bg-white text-black' : 'bg-[#0f0f0f] text-white'}`}>
      <MainSlider />
      <CategoryBanner />
      <EventBanner eventBannerImg={eventBannerImg} />
      <BestProductRecommendation />

      <div className="w-[81.25rem] py-[140px] mx-auto bg-slate-400">
        <NewProducts />
      </div>
    </div>
  );
}
