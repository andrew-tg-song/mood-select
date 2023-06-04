interface ProductProps {
  product: {
    color?: string[];
    image?: string;
    title?: string;
    desc?: string;
    price?: number;
    salePrice?: number;
    banner?: string[];
  };
}

const truncate = (str, n) => {
  return str.length > n ? str.substring(0, n - 1) + '...' : str;
};

export default function Product({ product }: ProductProps) {
  return (
    <div className="w-[19.375rem] bg-pink py-[20px] mb-[40px]">
      <div className="w-[19.375rem] h-[430px] bg-[#d9d9d9] ">
        <img className="w-[100%] h-[100%] object-cover" src={product.image} />
      </div>

      <div className="w-[100%] h-[190px]">
        <div className="flex flex-row">
          {product.color?.map((c) => {
            return (
              <div
                className={`${
                  c === 'red'
                    ? 'border-red'
                    : c === 'black'
                    ? 'border-[black]'
                    : c === 'ivory'
                    ? 'bg-[#ffffef] border-[#e0e0ca]'
                    : c === 'pink'
                    ? 'border-[pink]'
                    : c === 'white'
                    ? 'border-[lightgray] bg-[white]'
                    : 'border-[yellow]'
                } w-[1.25rem] h-[8px] indent-[-99999px] border-[0.6px] border-solid mr-[6px] my-[20px]`}
              >
                {c}
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
