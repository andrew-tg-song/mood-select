import Button from '../Button';
import CardSlider from '../slider/CardSlider';
import Title from '../slider/Title';

interface product {
  color?: string[];
  image?: string;
  title?: string;
  desc?: string;
  price?: number;
  salePrice?: number;
  banner?: string[];
}

interface ProductsProps {
  products: product[];
}

export default function TodayDeliveryProduct({ products }: ProductsProps) {
  return (
    <div>
      <Title text1="오늘 출발 제품." text2="빠르게 고객님을 찾아갑니다." />

      <CardSlider products={products} slidesToShow={4} slidesToScroll={4} />

      <Button value="MORE VIEW" />
    </div>
  );
}
