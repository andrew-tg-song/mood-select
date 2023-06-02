import Product from '../product/Product';
import { AiOutlineRight } from 'react-icons/ai';

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
      <div className="flex flex-row items-end">
        <h1 className="text-[1.75rem] text-[#282828]">새로운 제품.</h1>
        <p className="text-[1rem] text-[#A6A6A6] ml-[1.875rem]">더 다양한 제품으로 고객님의 취향을 저격!</p>
      </div>

      <div className="w-[100%] my-[40px] flex justify-between flex-wrap">
        {products.map((product, i: number) => {
          return (
            <>
              <Product key={i} product={product} />
            </>
          );
        })}
      </div>

      <button
        onClick={() => {}}
        className="w-[12.5rem] h-[60px] bg-[#000000] mx-auto flex justify-center items-center rounded-full text-[white] text-[0.875rem] font-light"
      >
        MORE VIEW
        <AiOutlineRight className="ml-[6px] text-[1.2rem]" />
      </button>
    </div>
  );
}
