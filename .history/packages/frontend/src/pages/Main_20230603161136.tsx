import { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';
import CategoryBanner from '../components/main/CategoryBanner';
import MainSlider from '../components/main/MainSlider';
import EventBanner from '../components/main/EventBanner';

import eventBannerImg from '../assets/review_event_banner.png';
import BestProductRecommendation from '../components/main/BestProductRecommendation';
import NewProducts from '../components/main/NewProducts';
import TodayDeliveryProduct from '../components/main/TodayDeliveryProduct';

const products = [
  {
    color: ['black', 'ivory', 'pink'],
    image: 'https://ririnco.com/web/product/big/202305/4599a30ba1f8752d2c1e5aa86a2c57b8.jpg',
    title: '브릿느 배색 세미크롭 퍼프 자켓1',
    desc: '세미크롭에 퍼프소매, 배색 바인딩으로 포인트를 준 여성스러운 자켓 :)',
    price: 41000,
    salePrice: 37620,
    banner: ['BEST', 'NEW', '무료 배송'],
  },
  {
    color: ['black', 'white'],
    image: 'https://ririnco.com/web/product/big/202304/22e3df3f4acf5aecebce4e37a9e158cd.jpg',
    title: '[웨딩룩] 웨린브 하트넥 머메이드 롱 원피스2',
    desc: '머메이드 라인으로 고급스러운 무드의 셀프 웨딩,브라이덜 샤워, 돌잔치 등 다양한 상황에 맞게 착용하기 좋아 강추드린답니다',
    price: 44900,
    salePrice: 40410,
    banner: ['BEST', 'NEW', '무료 배송'],
  },
  {
    color: ['ivory', 'pink', 'black'],
    image: 'https://atimg.sonyunara.com/files/attrangs/goods/152990/646330cba214e.jpg',
    title: '(데일리필수템/세미크롭기장) 모이 코튼 세미크롭 무지 반팔티3',
    desc: '머메이드 라인으로 고급스러운 무드의 셀프 웨딩,브라이덜 샤워, 돌잔치 등 다양한 상황에 맞게 착용하기 좋아 강추드린답니다',
    price: 24900,
    salePrice: 14900,
    banner: ['BEST', 'NEW', '무료 배송'],
  },
  {
    color: ['black', 'white'],
    image: 'https://ririnco.com/web/product/big/202304/22e3df3f4acf5aecebce4e37a9e158cd.jpg',
    title: '[웨딩룩] 웨린브 하트넥 머메이드 롱 원피스4',
    desc: '머메이드 라인으로 고급스러운 무드의 셀프 웨딩,브라이덜 샤워, 돌잔치 등 다양한 상황에 맞게 착용하기 좋아 강추드린답니다!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
    price: 44900,
    salePrice: 40410,
    banner: ['BEST', 'NEW', '무료 배송'],
  },
  {
    color: ['black', 'ivory', 'pink'],
    image: 'https://ririnco.com/web/product/big/202305/4599a30ba1f8752d2c1e5aa86a2c57b8.jpg',
    title: '브릿느 배색 세미크롭 퍼프 자켓5',
    desc: '세미크롭에 퍼프소매, 배색 바인딩으로 포인트를 준 여성스러운 자켓 :)',
    price: 41000,
    salePrice: 37620,
    banner: ['BEST', 'NEW', '무료 배송'],
  },
  {
    color: ['black', 'ivory'],
    image: 'https://ririnco.com/web/product/big/202304/a39fc3862eeadb121442ad993c3a65a7.jpg',
    title: '레나잇 포켓 뒷밴딩 미니 스커트6',
    desc: '	데일리한 매력의 귀여운 미니기장의 스커트에요 :)',
    price: 195500,
    salePrice: 17540,
    banner: ['BEST', 'NEW', '무료 배송'],
  },
  {
    color: ['black', 'ivory', 'pink'],
    image: 'https://ririnco.com/web/product/big/202305/4599a30ba1f8752d2c1e5aa86a2c57b8.jpg',
    title: '브릿느 배색 세미크롭 퍼프 자켓7',
    desc: '세미크롭에 퍼프소매, 배색 바인딩으로 포인트를 준 여성스러운 자켓 :)',
    price: 41000,
    salePrice: 37620,
    banner: ['BEST', 'NEW', '무료 배송'],
  },
  {
    color: ['black', 'ivory', 'pink'],
    image: 'https://ririnco.com/web/product/big/202305/4599a30ba1f8752d2c1e5aa86a2c57b8.jpg',
    title: '브릿느 배색 세미크롭 퍼프 자켓8',
    desc: '세미크롭에 퍼프소매, 배색 바인딩으로 포인트를 준 여성스러운 자켓 :)',
    price: 41000,
    salePrice: 37620,
    banner: ['BEST', 'NEW', '무료 배송'],
  },
];

export default function Main() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={`${darkMode === 'light' ? 'bg-white text-black' : 'bg-[#0f0f0f] text-white'} pb-[140px]`}>
      <MainSlider />
      <CategoryBanner />
      <EventBanner eventBannerImg={eventBannerImg} />
      <BestProductRecommendation />

      <div className="w-[81.25rem] py-[140px] mx-auto">
        <NewProducts />
        <TodayDeliveryProduct products={products} />
      </div>
      <EventBanner eventBannerImg={eventBannerImg} />
    </div>
  );
}
