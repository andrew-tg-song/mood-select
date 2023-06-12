// export default CardSlider;
import Slider from 'react-slick';
import { ReactNode, useContext } from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import NextArrow from './NextArrow';
import PrevArrow from './PrevArrow';
import { DarkModeContext } from '../../context/DarkModeContext';
import Product, { ProductType } from '../product/Product';

interface ObjectProps {
  id: number;
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

  slidesToScroll?: number;

  items?: ObjectProps[];

  products?: ProductType[];

  item: ProductType;
}

function CardSlider({
  autoplay = true,
  speed = 300,
  loop = true,
  items,
  slidesToShow,
  slidesToScroll,
  products,
  item,
}: sliderProps) {
  const { darkMode } = useContext(DarkModeContext);

  const settings = {
    className: slidesToShow === 3 ? 'center' : '',
    centerMode: slidesToShow === 3 ? true : false,
    centerPadding: slidesToShow === 3 ? '0px' : 'none',
    dots: true,
    infinite: loop,
    speed: speed,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    autoplay: Boolean(autoplay),
    autoplaySpeed: typeof autoplay === 'boolean' ? 3000 : autoplay,
    nextArrow: <NextArrow slidesToShow={slidesToShow} />,
    prevArrow: <PrevArrow slidesToShow={slidesToShow} />,
    appendDots: (dots: ReactNode) => (
      <div
        style={{
          width: '100%',
          position: 'absolute',
          bottom: '-12px',
          display: slidesToShow === 1 || slidesToShow === 3 || slidesToShow === 4 ? 'none' : 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <ul> {dots} </ul>
      </div>
    ),
    dotsClass: darkMode === 'light' ? 'dots_custom' : 'dots_custom_dark',
  };

  console.log(item?.detail?.similar);

  return (
    <div
      className={`${
        slidesToShow === 1
          ? 'slider_wrapper_main_slider'
          : slidesToShow === 2
          ? 'slider_wrapper'
          : slidesToShow === 3
          ? 'slider_wrapper_best_products'
          : 'slider_wrapper_today_delivery_products'
      }`}
    >
      {items && (
        <>
          <Slider {...settings}>
            {items?.map((item) => {
              return (
                <div
                  key={item.id}
                  className={`${
                    slidesToShow === 1
                      ? 'personal_slider_main_slider'
                      : slidesToShow === 2
                      ? 'personal_slider'
                      : 'personal_slider_best_products'
                  }`}
                >
                  {slidesToShow === 1 ? (
                    <div className="dark_opacity_main_slider" />
                  ) : slidesToShow === 2 ? (
                    <div className={`${item.id % 2 === 0 ? 'dark_opacity' : 'dark_opacity2'}`} />
                  ) : (
                    <div className="dark_opacity_best_products" />
                  )}

                  {slidesToShow === 1 ? (
                    <img className="main_slider_img" src={item.image} />
                  ) : slidesToShow === 2 ? (
                    <img className={`${item.id % 2 === 0 ? 'slider_img' : 'slider_img2'}`} src={item.image} />
                  ) : (
                    <img className="best_products_slider_img" src={item.image} />
                  )}

                  {slidesToShow === 1 ? (
                    <></>
                  ) : slidesToShow === 2 ? (
                    <div className="desc_wrap">
                      <h1 className="desc_h1">{item.title}</h1>
                      <p className="desc_p">{item.desc}</p>
                    </div>
                  ) : (
                    <div className="desc_wrap_best_products">
                      <h1 className="desc_h1_best_products">{item.title}</h1>
                      <p className="desc_p_best_products">{item.desc}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </Slider>
        </>
      )}

      <>
        <Slider {...settings}>
          {products?.map((product, idx) => {
            return <Product product={product} key={idx} onClick={() => void 0} />;
          })}
        </Slider>
      </>
    </div>
  );
}

export default CardSlider;
