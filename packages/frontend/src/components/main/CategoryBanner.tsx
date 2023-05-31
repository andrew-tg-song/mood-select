import CardSlider from '../slider/CardSlider';

const CategoryBanner = (): JSX.Element => {
  const items = [
    {
      id: 0,
      image: 'https://atimg.sonyunara.com/files/attrangs/goods/154178/6476b7874c509.jpg',
      title: 'PANTS',
      desc: '언제 어디서든 편안하게',
    },
    {
      id: 1,
      image: 'https://atimg.sonyunara.com/files/attrangs/goods/140777/642d31658d0e8.jpg',
      title: 'ONE PIECE',
      desc: '어디서든 나를 돋보이게',
    },
    {
      id: 2,
      image: 'https://atimg.sonyunara.com/files/attrangs/goods/153872/1684940318_3.jpg',
      title: 'CARDIGAN',
      desc: '어디서든 산뜻하게',
    },
    {
      id: 3,
      image: 'https://atimg.sonyunara.com/files/attrangs/goods/92113/6114d5bb5e303.jpg',
      title: 'T-SHIRT',
      desc: '꾸민듯 안 꾸민듯 자연스럽게',
    },
  ];

  return (
    <div className="w-[81.25rem] mx-auto pt-[8.75rem]">
      <CardSlider items={items} slidesToShow={2} slidesToScroll={2} />
    </div>
  );
};

export default CategoryBanner;
