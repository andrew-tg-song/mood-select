import CardSlider from '../slider/CardSlider';

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
      <div className="flex flex-row items-end">
        <h1 className="text-[1.75rem] text-[#282828]">오늘 출발 제품.</h1>
        <p className="text-[1rem] text-[#A6A6A6] ml-[1.875rem]">빠르게 고객님을 찾아갑니다.</p>
      </div>

      <CardSlider products={products} slidesToShow={4} slidesToScroll={4} />
    </div>
  );
}
