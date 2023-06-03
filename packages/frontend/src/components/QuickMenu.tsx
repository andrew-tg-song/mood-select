import React, { useState, useContext, useEffect } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';
import { BsChevronUp, BsChevronDown } from 'react-icons/bs';
import { AiOutlineWechat } from 'react-icons/ai';

interface QuickMenuPropsType {
  contentRef: React.RefObject<HTMLDivElement>;
}

export default function QuickMenu({ contentRef }: QuickMenuPropsType) {
  const { darkMode } = useContext(DarkModeContext);

  const [scrollY, setScrollY] = useState(0);
  const [showButton, setShowButton] = useState(false);

  const handleFollow = () => {
    setScrollY(window.pageYOffset);
  };

  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setScrollY(0);
    setShowButton(false);
  };

  const handleBottom = () => {
    contentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
    setScrollY(scrollY);
    setShowButton(true);
  };

  useEffect(() => {
    const watch = () => {
      window.addEventListener('scroll', handleFollow);
    };

    watch();

    return () => {
      window.removeEventListener('scroll', handleFollow);
    };
  }, []);

  useEffect(() => {
    const handleShowButton = () => {
      window.scrollY > 100 ? setShowButton(true) : setShowButton(false);
    };

    window.addEventListener('scroll', handleShowButton);

    return () => window.removeEventListener('scroll', handleShowButton);
  }, []);

  // console.log(scrollY);

  return (
    <div
      className={`${darkMode === 'light' ? 'text-white' : 'text-[#0f0f0f]'} ${
        showButton ? 'opacity-1' : 'opacity-0 transition ease-in-out'
      } fixed right-[12px] bottom-[12px] text-[2rem] z-[99999]`}
    >
      <div
        className={`${
          darkMode === 'light' ? 'bg-[#0f0f0f]' : 'bg-white'
        } w-[60px] h-[60px] rounded-full drop-shadow-[0_5px_2px_rgba(0,0,0,0.25)] flex justify-center items-center cursor-pointer animate-bounce`}
      >
        <AiOutlineWechat />
      </div>
      <div
        onClick={handleTop}
        className={`${
          darkMode === 'light' ? 'bg-[#0f0f0f]' : 'bg-white'
        } w-[60px] h-[60px] rounded-full drop-shadow-[0_5px_2px_rgba(0,0,0,0.25)] mt-[10px] flex justify-center items-center cursor-pointer animate-bounce`}
      >
        <BsChevronUp />
      </div>
      <div
        onClick={handleBottom}
        className={`${
          darkMode === 'light' ? 'bg-[#0f0f0f]' : 'bg-white'
        } w-[60px] h-[60px] rounded-full drop-shadow-[0_5px_2px_rgba(0,0,0,0.25)] mt-[10px] flex justify-center items-center cursor-pointer animate-bounce`}
      >
        <BsChevronDown />
      </div>
    </div>
  );
}
