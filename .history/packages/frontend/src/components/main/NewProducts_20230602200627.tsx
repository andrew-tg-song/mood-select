import Button from '../Button';
import Product from '../product/Product';
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

export default function NewProducts({ products }: ProductsProps) {
  return (
    <div className="mb-[140px]">
      <Title text1="새로운 제품." text2="더 다양한 제품으로 고객님의 취향의 저격!" />

      <div className="w-[100%] mt-[40px] flex justify-between flex-wrap">
        {products.map((product, i: number) => {
          return (
            <>
              <Product key={i} product={product} />
            </>
          );
        })}
      </div>

      <Button value="MORE VIEW" />
    </div>
  );
}
