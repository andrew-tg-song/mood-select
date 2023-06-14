import { ProductType } from '../product/Product';
import CardSlider from '../slider/CardSlider';

interface SimilarProps {
  product: ProductType;
}

export default function Similar({ product }: SimilarProps) {
  console.log(product);
  return (
    <div>
      <h1>Similar</h1>
      <CardSlider item={product} slidesToShow={4} slidesToScroll={4} />
    </div>
  );
}
