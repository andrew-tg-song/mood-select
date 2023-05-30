import React, { useState, useContext, useEffect } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';
import { BsChevronUp, BsChevronDown } from 'react-icons/bs';
import { AiOutlineWechat } from 'react-icons/ai';

export default function QuickMenu() {
  const { darkMode } = useContext(DarkModeContext);

  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleShowButton = () => {
      window.scrollY > 100 ? setShowButton(true) : setShowButton(false);
    };

    window.addEventListener('scroll', handleShowButton);

    return () => window.removeEventListener('scroll', handleShowButton);
  }, []);

  return (
    <div
      className={`${darkMode === 'light' ? 'text-white' : 'text-[#0f0f0f]'} ${
        showButton ? 'block' : 'hidden'
      } fixed right-[12px] bottom-[12px] text-[2rem]`}
    >
      <div
        className={`${
          darkMode === 'light' ? 'bg-[#0f0f0f]' : 'bg-white'
        } w-[60px] h-[60px] rounded-full drop-shadow-[0_5px_2px_rgba(0,0,0,0.25)] flex justify-center items-center cursor-pointer`}
      >
        <AiOutlineWechat />
      </div>
      <div
        onClick={scrollToTop}
        className={`${
          darkMode === 'light' ? 'bg-[#0f0f0f]' : 'bg-white'
        } w-[60px] h-[60px] rounded-full drop-shadow-[0_5px_2px_rgba(0,0,0,0.25)] mt-[10px] flex justify-center items-center cursor-pointer`}
      >
        <BsChevronUp />
      </div>
      <div
        className={`${
          darkMode === 'light' ? 'bg-[#0f0f0f]' : 'bg-white'
        } w-[60px] h-[60px] rounded-full drop-shadow-[0_5px_2px_rgba(0,0,0,0.25)] mt-[10px] flex justify-center items-center cursor-pointer`}
      >
        <BsChevronDown />
      </div>
    </div>
  );
}
