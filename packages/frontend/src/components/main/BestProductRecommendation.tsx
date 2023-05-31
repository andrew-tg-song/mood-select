import React from 'react';
import CardSlider from '../slider/CardSlider';

const BestProductRecommendation = (): JSX.Element => {
  const items = [
    {
      image: 'https://i.pinimg.com/564x/03/d6/6d/03d66d6028048e993e8eda27b9acde47.jpg',
      title: 'slide 1',
      desc: 'slide 111111111111111111',
    },
    {
      image: 'https://i.pinimg.com/564x/03/d6/6d/03d66d6028048e993e8eda27b9acde47.jpg',
      title: 'slide 2',
      desc: 'slide 111111111111111111',
    },
    {
      image: 'https://i.pinimg.com/564x/03/d6/6d/03d66d6028048e993e8eda27b9acde47.jpg',
      title: 'slide 3',
      desc: 'slide 111111111111111111',
    },
    {
      image: 'https://i.pinimg.com/564x/03/d6/6d/03d66d6028048e993e8eda27b9acde47.jpg',
      title: 'slide 4',
      desc: 'slide 111111111111111111',
    },
    {
      image: 'https://i.pinimg.com/564x/03/d6/6d/03d66d6028048e993e8eda27b9acde47.jpg',
      title: 'slide 5',
      desc: 'slide 111111111111111111',
    },
    {
      image: 'https://i.pinimg.com/564x/03/d6/6d/03d66d6028048e993e8eda27b9acde47.jpg',
      title: 'slide 6',
      desc: 'slide 111111111111111111',
    },
    {
      image: 'https://i.pinimg.com/564x/03/d6/6d/03d66d6028048e993e8eda27b9acde47.jpg',
      title: 'slide 7',
      desc: 'slide 111111111111111111',
    },
    {
      image: 'https://i.pinimg.com/564x/03/d6/6d/03d66d6028048e993e8eda27b9acde47.jpg',
      title: 'slide 8',
      desc: 'slide 111111111111111111',
    },
  ];

  return (
    <div className="w-[100%] bg-pink-400">
      <p>베스트 제품</p>
      <p>고객님들께 가장 사랑받는 제품</p>

      <CardSlider items={items} slidesToShow={2} />
    </div>
  );
};

export default BestProductRecommendation;
