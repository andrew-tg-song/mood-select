import { useState } from 'react';
import { BsPlusSquareDotted, BsDashSquareDotted, BsFillXSquareFill } from 'react-icons/bs';
import { useRecoilState } from 'recoil';
import { optionListState } from '../../atoms/product-atoms';

interface OptionProps {
  detail: { color: string; size: string };
  price: number | undefined;
  total: number;
  handleCountChange: (change: number) => void;
  addComma: (number: number) => void;
}

export default function OptionSelect({ detail, total, handleCountChange, price, addComma }: OptionProps) {
  const [count, setCount] = useState(1);

  const [option] = useRecoilState(optionListState);
  console.log(option);

  return (
    <div className="w-[100%] bg-[#E5E5E5] p-[1.25rem] box-border rounded-md mb-[6px] text-[#333333] text-[0.8125rem] flex justify-between items-center">
      <div>{`${detail.color} / ${detail.size}`}</div>
      <div>
        <button
          onClick={() => {
            setCount(count + 1);
            handleCountChange(1);
          }}
        >
          <BsPlusSquareDotted />
        </button>
        {`${count} / ${total}`}
        <button
          onClick={() => {
            if (count > 0) {
              setCount(count - 1);
              handleCountChange(-1);
            }
            // handleClickCountMinus();
          }}
        >
          <BsDashSquareDotted />
        </button>
      </div>
      <div className="flex">
        <p>{price && `${addComma(count * price)}원`}</p>
        <button className="ml-[1rem]">
          <BsFillXSquareFill />
        </button>
      </div>
    </div>
  );
}
