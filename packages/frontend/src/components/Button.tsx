import { AiOutlineRight } from 'react-icons/ai';
import { BsCaretDown, BsCaretUp } from 'react-icons/bs';

interface ButtonProps {
  value: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({ value, onClick }: ButtonProps): JSX.Element {
  return (
    <button
      onClick={onClick}
      className={`${
        value === '상세정보 펼쳐보기' || value === '상세정보 접기'
          ? 'w-[22.5rem] h-[80px] absolute bottom-[50px] z-[999999] text-[1.2rem] rounded-[10px]'
          : 'w-[12.5rem] h-[60px] rounded-full'
      } bg-[#000000] mx-auto flex justify-center items-center text-[white] text-[0.875rem] font-light hover:bg-[white] hover:border-[1px] hover:border-solid hover:border-[#282828] hover:text-[#282828] transition-all duration-[0.5s]`}
    >
      <p>{value}</p>
      {value === 'MORE VIEW' && <AiOutlineRight className="ml-[6px] text-[1.2rem]" />}
      {value === '상세정보 펼쳐보기' && <BsCaretDown className="ml-[6px] text-[1.4rem]" />}
      {value === '상세정보 접기' && <BsCaretUp className="ml-[6px] text-[1.4rem]" />}
    </button>
  );
}
