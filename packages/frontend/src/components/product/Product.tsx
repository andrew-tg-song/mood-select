export interface ProductType {
  id: string;
  typeA?: string;
  typeB?: string;
  color?: ProductObjectColor[];
  image?: string;
  image2?: string;
  image3?: string;
  image4?: string;
  image5?: string;
  title: string;
  desc: string;
  price?: number;
  salePrice?: number;
  banner?: string[];
  best?: boolean;
  new?: boolean;
  option?: ProductObject;
}

interface ProductObjectColor {
  name: string;
  image?: string;
}

interface ProductObject {
  size: string[];
}

export interface ProductProps {
  product: ProductType;
  onClick(): void;
}

const truncate = (str: string, n: number) => {
  return str.length > n ? str.substring(0, n - 1) + '...' : str;
};

export default function Product({ product, onClick }: ProductProps) {
  return (
    <div onClick={onClick} className="w-[19.375rem] bg-pink py-[20px] mb-[40px]">
      <div className="w-[19.375rem] h-[430px] bg-[#d9d9d9] ">
        <img className="w-[100%] h-[100%] object-cover" src={product.image} />
      </div>

      <div className="w-[100%] h-[190px]">
        <div className="flex flex-row">
          {product.color?.map((c) => {
            return (
              <div
                className={`${
                  c.name === 'red'
                    ? 'border-red'
                    : c.name === 'black'
                    ? 'border-[black]'
                    : c.name === 'ivory'
                    ? 'bg-[#ffffef] border-[#e0e0ca]'
                    : c.name === 'pink'
                    ? 'border-[pink]'
                    : c.name === 'white'
                    ? 'border-[lightgray] bg-[white]'
                    : c.name === 'yellow'
                    ? 'border-[yellow]'
                    : c.name === 'beige'
                    ? 'border-[beige]'
                    : c.name === 'blue'
                    ? 'border-[blue]'
                    : c.name === 'brown'
                    ? 'border-[brown]'
                    : c.name === 'cream'
                    ? 'border-[cream]'
                    : c.name === 'deeppink'
                    ? 'border-[deeppink]'
                    : c.name === 'gray'
                    ? 'border-[gray]'
                    : c.name === 'green'
                    ? 'border-[green]'
                    : c.name === 'lavender'
                    ? 'border-[lavender]'
                    : c.name === 'lime'
                    ? 'border-[lime]'
                    : c.name === 'mint'
                    ? 'border-[mint]'
                    : c.name === 'navyblue'
                    ? 'border-[navy]'
                    : c.name === 'orange'
                    ? 'border-[orange]'
                    : c.name === 'redpurple'
                    ? 'border-[redpurple]'
                    : c.name === 'skyblue'
                    ? 'border-[skyblue]'
                    : 'border-[yellowgreen]'
                } w-[1.25rem] h-[8px] indent-[-99999px] border-[0.6px] border-solid mr-[6px] my-[20px]`}
              >
                {c.name}
              </div>
            );
          })}
        </div>
        <p className="text-[0.875rem] font-medium text-[#333] mb-[10px]">{truncate(product.title, 28)}</p>
        <p className="text-[0.75rem] text-[#878787] mb-[14px]">{truncate(product.desc, 31)}</p>
        <p className="text-[#333333] text-[0.9375rem] font-medium">￦ {product.salePrice}</p>

        <div className="flex flex-row">
          {product.banner?.map((b) => {
            return (
              <>
                <div
                  className={`${
                    b === 'BEST'
                      ? 'border-[#814F4F] text-[#814F4F]'
                      : b === 'NEW'
                      ? 'border-[#00CBCB] text-[#00CBCB]'
                      : 'border-[#FF53BA] text-[#FF53BA]'
                  } w-[3.75rem] h-[20px] border-[0.6px] border-solid flex justify-center items-center text-[0.75rem] mr-[5px] mt-[16px]`}
                >
                  {b}
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
