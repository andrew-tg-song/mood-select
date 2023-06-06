import Slider from 'react-slick';
import PrevArrow from './PrevArrow';
import NextArrow from './NextArrow';

interface ImgType {
  img1?: string;
  img2?: string;
  img3?: string;
  img4?: string;
  img5?: string;
}

export default function DetailCardSlider({ img1, img2, img3, img4, img5 }: ImgType) {
  const imgs = [img1, img2, img3, img4, img5];
  const type = 'detail';

  const settings = {
    customPaging: function (i: number) {
      return (
        <a className="">
          <img className="" src={imgs[i]} />
        </a>
      );
    },
    dots: true,
    dotsClass: 'slick-dots slick-thumb',
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow type={type} />,
    nextArrow: <NextArrow type={type} />,
  };
  return (
    <div className="w-[50%] relative">
      <Slider {...settings}>
        <div>
          <img src={img1} />
        </div>
        <div>
          <img src={img2} />
        </div>
        <div>
          <img src={img3} />
        </div>
        <div>
          <img src={img4} />
        </div>
        <div>
          <img src={img5} />
        </div>
      </Slider>
    </div>
  );
}
