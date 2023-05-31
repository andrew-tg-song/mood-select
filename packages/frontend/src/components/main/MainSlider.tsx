import React from 'react';
import CardSlider from '../slider/CardSlider';
import main_slider_img from '../../assets/main_slider_img.png';

export default function MainSlider() {
  const items = [
    {
      id: 0,
      image: main_slider_img,
      title: '원하는 MOOD로, 이제는 우리가 골라줄게.',
      desc: '',
    },
    {
      id: 1,
      image: main_slider_img,
      title: '원하는 MOOD로, 이제는 우리가 골라줄게.',
      desc: '',
    },
    {
      id: 2,
      image: main_slider_img,
      title: '원하는 MOOD로, 이제는 우리가 골라줄게.',
      desc: '',
    },
  ];

  return (
    <div>
      <CardSlider items={items} slidesToShow={1} slidesToScroll={1} />
    </div>
  );
}
