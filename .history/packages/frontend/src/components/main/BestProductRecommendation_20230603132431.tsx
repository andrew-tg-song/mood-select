import { search } from '../../ShoppingMallProducts';
import CardSlider from '../slider/CardSlider';
import Title from '../slider/Title';
import { useQuery } from '@tanstack/react-query';

export default function BestProductRecommendation() {
  const items = [
    {
      id: 0,
      image: 'https://ririnco.com/web/product/big/202305/bf933408bd6fc7b5a20072690f6aea0f.jpg',
      title: '오엘루 링클 셔링 리본 롱 원피스',
      desc: '부드럽고 가벼운 링클 원단으로 착용감이 매우 편안하며 섬세한 셔링 디테일이 여리하고 청초한 분위기를 더해준답니다 :)',
    },
    {
      id: 1,
      image: 'https://ririnco.com/web/product/big/202305/ddbcda51310b025cb732aca65c39a27f.jpg',
      title: '로앤브 세미크롭 투웨이 세일러카라 집업',
      desc: '세미크롭에 투웨이 디테일로 다양하게 연출하기 좋으며 소재까지 부드럽답니다 :)',
    },
    {
      id: 2,
      image: 'https://ririnco.com/web/product/big/202305/d94a4e1bb287ec072dc7e08411a4ac4d.jpg',
      title: '피에로 밴딩 와이드 팬츠',
      desc: '편하게 자주 입히는 여유있는 와이드 핏의 밴딩 팬츠에요 찰랑거리는 가벼운 소재로 피부에 닿는 감촉도 좋답니다:)',
    },
    {
      id: 3,
      image: 'https://ririnco.com/web/product/big/202305/ec9bbc935c1db6f9bb1cad332b216fe5.jpg',
      title: '베티론 플리츠 뷔스티에 롱 원피스 (끈조절)',
      desc: '플리츠 스커트에 뷔스티에 디테일로 여성스럽게 연출하기 좋은 원피스 :)',
    },
    {
      id: 4,
      image: 'https://ririnco.com/web/product/big/202305/b492f0bee7083bdd0a3337a1cc859b2e.jpg',
      title: '젠다링 자켓 밴딩 와이드 팬츠 투피스 세트',
      desc: '원버튼 자켓과 밴딩 와이드 팬츠가 세트인 투피스 아이템이랍니다 따로 또 같이 착용하기 너무 좋아요 실용도 높은 세트로 강추드려요 (:',
    },
  ];

  const name = 'BEST';

  const {
    isLoading,
    error,
    data: products,
  } = useQuery(['products' name], async () => search(name), { staleTime: 1000 * 60 * 5 });
  console.log(products);

  return (
    <div className="w-[100%] bg-[#1d1d1d]">
      <div className="w-[81.25rem] mx-auto py-[90px]">
        <Title text1="베스트 제품." text2="고객님의 마음을 두드릴 베스트 제품을 소개합니다." />

        <CardSlider items={items} slidesToShow={3} slidesToScroll={3} />
      </div>
    </div>
  );
}
