// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import NextArrow from './NextArrow';
// import PrevArrow from './PrevArrow';

// const CardSlider = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     speed: 500,
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,
//     dotsClass: 'custom-dots',
//   };
//   return (
//     <div>
//       <Slider {...settings}>
//         <div>
//           <img src="https://i.pinimg.com/564x/03/d6/6d/03d66d6028048e993e8eda27b9acde47.jpg" />
//           <h1>Slide 1</h1>
//         </div>

//         <div>
//           <img src="https://i.pinimg.com/564x/03/d6/6d/03d66d6028048e993e8eda27b9acde47.jpg" />
//           <h1>Slide 2</h1>
//         </div>

//         <div>
//           <img src="https://i.pinimg.com/564x/03/d6/6d/03d66d6028048e993e8eda27b9acde47.jpg" />
//           <h1>Slide 3</h1>
//         </div>
//         <div>
//           <img src="https://i.pinimg.com/564x/03/d6/6d/03d66d6028048e993e8eda27b9acde47.jpg" />
//           <h1>Slide 4</h1>
//         </div>
//         <div>
//           <img src="https://i.pinimg.com/564x/03/d6/6d/03d66d6028048e993e8eda27b9acde47.jpg" />
//           <h1>Slide 5</h1>
//         </div>
//         <div>
//           <img src="https://i.pinimg.com/564x/03/d6/6d/03d66d6028048e993e8eda27b9acde47.jpg" />
//           <h1>Slide 6</h1>
//         </div>
//       </Slider>
//     </div>
//   );
// };

// export default CardSlider;
import Slider, { Settings } from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Items from './Items';
import NextArrow from './NextArrow';
import PrevArrow from './PrevArrow';

interface ObjectProps {
  image: string;
  title: string;
  desc: string;
}

interface sliderProps {
  /** 커스텀 클래스 */
  className?: string;
  /** 자동재생 (속도 설정시 number 타입으로) */
  autoplay?: boolean | number;
  /** 슬라이더 속도 */
  speed?: number;
  /** 반복 여부 */
  loop?: boolean;

  slidesToShow?: number;

  items?: ObjectProps[];
}

function CardSlider({ className, autoplay = true, speed = 300, loop = true, items, slidesToShow }: sliderProps) {
  const settings = {
    dots: true,
    infinite: loop,
    speed: speed,
    slidesToShow: slidesToShow,
    autoplay: Boolean(autoplay),
    autoplaySpeed: typeof autoplay === 'boolean' ? 3000 : autoplay,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className={className}>
      <Slider {...settings}>
        {items?.map((item) => {
          return (
            <div>
              <img src={item.image} />
              <h1>{item.title}</h1>
              <p>{item.desc}</p>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default CardSlider;
