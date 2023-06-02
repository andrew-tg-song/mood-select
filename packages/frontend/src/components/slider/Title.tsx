import { useContext } from 'react';
import { DarkModeContext } from '../../context/DarkModeContext';

interface TitleProps {
  text1: string;
  text2: string;
}

export default function Title({ text1, text2 }: TitleProps) {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className="flex flex-row items-end">
      <h1
        className={`${
          darkMode ? 'text-[white]' : text1 === '베스트 제품.' ? 'text-[white]' : 'text-[#282828]'
        } text-[1.75rem]`}
      >
        {text1}
      </h1>
      <p className="text-[1rem] text-[#A6A6A6] ml-[1.875rem]">{text2}</p>
    </div>
  );
}
