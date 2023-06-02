import { AiOutlineRight } from 'react-icons/ai';

interface ButtonProps {
  value: string;
}

export default function Button({ value }: ButtonProps) {
  return (
    <button
      onClick={() => {}}
      className="w-[12.5rem] h-[60px] bg-[#000000] mx-auto flex justify-center items-center rounded-full text-[white] text-[0.875rem] font-light"
    >
      {value}
      {value === 'MORE VIEW' && <AiOutlineRight className="ml-[6px] text-[1.2rem]" />}
    </button>
  );
}
