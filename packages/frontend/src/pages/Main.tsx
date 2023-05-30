import React, { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';

export default function Main() {
  const { darkMode } = useContext(DarkModeContext);

  return <div className={`${darkMode === 'light' ? 'bg-white text-black' : 'bg-[#0f0f0f] text-white'}`}>Main</div>;
}
