import Button from '../Button';
import { ProductType } from '../product/Product';
import CardSlider from '../slider/CardSlider';
import Title from '../slider/Title';

interface ProductsProps {
  products: ProductType[];
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
