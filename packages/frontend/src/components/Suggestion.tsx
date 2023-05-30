import React, { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';
import { BsFillEmojiSmileFill } from 'react-icons/bs';

export default function Suggestion() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div
      className={`${
        darkMode === 'light' ? 'bg-black text-white' : 'bg-white text-black'
      } w-[56px] h-[116px] p-[1rem]  box-border z-[99999] fixed right-0 top-[50%] mt-[-27.5px] rounded-l-2xl drop-shadow-[0_5px_2px_rgba(0,0,0,0.25)] [writing-mode:vertical-rl] flex items-center justify-between`}
    >
      <BsFillEmojiSmileFill className="text-[1.4rem] rotate-90" />
      <p className="font-['Peddana'] text-[1.4rem] leading-4">
        MOOD
        <br />
        SELECT
      </p>
    </div>
  );
}
